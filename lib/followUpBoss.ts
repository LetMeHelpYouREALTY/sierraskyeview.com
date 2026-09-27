const SITE = "sierraskyeview.com";

export type FubPerson = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  formName: string;
};

export type FubEventInput = {
  type: string;
  message: string;
  description: string;
  sourceUrl: string;
  person: FubPerson;
};

export function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export function buildFubEventBody(input: FubEventInput) {
  const firstName = input.person.firstName.trim();
  const lastName = input.person.lastName.trim();

  const emails = input.person.email
    ? [{ value: input.person.email.trim() }]
    : [];
  const phones = input.person.phone
    ? [{ value: input.person.phone.trim() }]
    : [];

  return {
    source: SITE,
    system: SITE,
    type: input.type,
    message: input.message,
    description: input.description,
    sourceUrl: input.sourceUrl,
    person: {
      firstName,
      lastName,
      emails,
      phones,
      tags: [SITE, input.person.formName],
    },
  };
}

export async function sendFollowUpBossEvent(
  apiKey: string,
  input: FubEventInput,
  fetchImpl: typeof fetch = fetch
): Promise<{ ok: true } | { ok: false; status: number }> {
  const body = buildFubEventBody(input);
  const auth = Buffer.from(`${apiKey}:`).toString("base64");

  try {
    const response = await fetchImpl("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        "X-System": SITE,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    return { ok: false, status: response.status };
  } catch {
    return { ok: false, status: 0 };
  }
}

export const CONTACT_FORM_NAME = "Contact Form";
export const CONTACT_FUB_TYPE = "General Inquiry";
export const SITE_DISPLAY_PHONE = "(702) 903-4687";
