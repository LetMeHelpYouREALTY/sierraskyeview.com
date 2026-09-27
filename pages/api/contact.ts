import type { NextApiRequest, NextApiResponse } from "next";
import {
  CONTACT_FORM_NAME,
  CONTACT_FUB_TYPE,
  sendFollowUpBossEvent,
  splitFullName,
} from "../../lib/followUpBoss";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  sourceUrl?: string;
};

function validationError(res: NextApiResponse, message: string) {
  return res.status(400).json({ error: message });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      "Contact API: FOLLOW_UP_BOSS_API_KEY is not set in the environment"
    );
    return res.status(503).json({ error: "Lead capture is temporarily unavailable" });
  }

  const body: ContactBody =
    typeof req.body === "object" && req.body !== null ? req.body : {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) {
    return validationError(res, "Name is required");
  }

  if (!email && !phone) {
    return validationError(res, "Email or phone is required");
  }

  const referer = req.headers.referer;
  const sourceUrl =
    (typeof body.sourceUrl === "string" && body.sourceUrl.trim()) ||
    (typeof referer === "string" ? referer : "") ||
    "https://www.sierraskyeview.com/contact";

  const { firstName, lastName } = splitFullName(name);
  const messageLines = [message];
  if (email) {
    messageLines.push(`Email: ${email}`);
  }
  if (phone) {
    messageLines.push(`Phone: ${phone}`);
  }

  const result = await sendFollowUpBossEvent(apiKey, {
    type: CONTACT_FUB_TYPE,
    message: messageLines.filter(Boolean).join("\n"),
    description: `${CONTACT_FORM_NAME} — Contact page`,
    sourceUrl,
    person: {
      firstName,
      lastName,
      email: email || undefined,
      phone: phone || undefined,
      formName: CONTACT_FORM_NAME,
    },
  });

  if (!result.ok) {
    if (result.status) {
      console.error(
        `Contact API: Follow Up Boss returned HTTP ${result.status}`
      );
    } else {
      console.error("Contact API: Follow Up Boss request failed");
    }
    return res.status(502).json({ error: "Failed to submit to CRM" });
  }

  return res.status(200).json({ success: true });
}
