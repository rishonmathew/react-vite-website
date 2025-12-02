import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const contact = req.body;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Asthi <noreply@asthi.com>",
        to: ["owner@asthi.com"],
        subject: "New Contact Message",
        html: `
          <p><b>Name:</b> ${contact.name}</p>
          <p><b>Email:</b> ${contact.email}</p>
          <p><b>Message:</b> ${contact.message}</p>
        `,
      }),
    });

    const data = await resp.json();

    return res.status(200).json({ ok: true, data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal error" });
  }
}
