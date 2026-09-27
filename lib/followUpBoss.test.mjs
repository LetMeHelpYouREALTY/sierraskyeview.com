import assert from "node:assert/strict";
import test from "node:test";
import {
  buildFubEventBody,
  sendFollowUpBossEvent,
  splitFullName,
} from "./followUpBoss.ts";

test("splitFullName splits on first space", () => {
  assert.deepEqual(splitFullName("Jan Duffy"), {
    firstName: "Jan",
    lastName: "Duffy",
  });
});

test("buildFubEventBody matches standard FUB shape", () => {
  const body = buildFubEventBody({
    type: "General Inquiry",
    message: "Hello",
    description: "Contact Form — Contact page",
    sourceUrl: "https://www.sierraskyeview.com/contact",
    person: {
      firstName: "Jan",
      lastName: "Duffy",
      email: "test@example.com",
      formName: "Contact Form",
    },
  });

  assert.equal(body.source, "sierraskyeview.com");
  assert.equal(body.type, "General Inquiry");
  assert.equal(body.person.emails[0].value, "test@example.com");
  assert.deepEqual(body.person.tags, ["sierraskyeview.com", "Contact Form"]);
});

test("sendFollowUpBossEvent uses mocked fetch", async () => {
  let capturedUrl;
  let capturedInit;
  const mockFetch = async (url, init) => {
    capturedUrl = url;
    capturedInit = init;
    return { status: 201 };
  };

  const result = await sendFollowUpBossEvent(
    "test-key",
    {
      type: "General Inquiry",
      message: "Hi",
      description: "Contact Form",
      sourceUrl: "https://www.sierraskyeview.com/contact",
      person: {
        firstName: "A",
        lastName: "B",
        email: "a@b.com",
        formName: "Contact Form",
      },
    },
    mockFetch
  );

  assert.equal(result.ok, true);
  assert.equal(capturedUrl, "https://api.followupboss.com/v1/events");
  const parsed = JSON.parse(capturedInit.body);
  assert.equal(parsed.person.firstName, "A");
  assert.match(capturedInit.headers.Authorization, /^Basic /);
});
