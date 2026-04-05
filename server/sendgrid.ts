// SendGrid integration via Replit Connectors
import sgMail from '@sendgrid/mail';

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X-Replit-Token not found');
  }

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
    {
      headers: {
        'Accept': 'application/json',
        'X-Replit-Token': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error('SendGrid not connected');
  }
  return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
}

export async function getUncachableSendGridClient() {
  const { apiKey, email } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return { client: sgMail, fromEmail: email };
}

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();

    await client.send({
      to: 'info@clientlly.com',
      from: fromEmail,
      replyTo: data.email,
      subject: `[Kontakt] ${data.subject} — ${data.firstName} ${data.lastName}`,
      html: `
        <h2>Mesazh i ri nga formulari i kontaktit</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;color:#4338ca;">Emri:</td><td style="padding:8px;">${data.firstName} ${data.lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#4338ca;">Email:</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#4338ca;">Kompania:</td><td style="padding:8px;">${data.company || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#4338ca;">Subjekti:</td><td style="padding:8px;">${data.subject}</td></tr>
        </table>
        <h3 style="color:#4338ca;margin-top:20px;">Mesazhi:</h3>
        <p style="padding:12px;background:#f5f3ff;border-radius:8px;line-height:1.6;">${data.message.replace(/\n/g, '<br>')}</p>
        <hr style="margin-top:30px;border:none;border-top:1px solid #e5e7eb;">
        <p style="font-size:12px;color:#9ca3af;">Dërguar nga formulari i kontaktit — clientlly.com</p>
      `,
    });

    console.log(`Contact email sent to info@clientlly.com from ${data.email}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendAffiliateEmail(data: {
  name: string;
  email: string;
  phone: string;
  method: string;
}): Promise<boolean> {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();

    await client.send({
      to: 'info@clientlly.com',
      from: fromEmail,
      replyTo: data.email,
      subject: `[Afilim] Aplikim i ri — ${data.name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:28px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">🤝 Aplikim i Ri për Programin e Afilimit</h1>
            <p style="color:#c7d2fe;margin:6px 0 0;font-size:14px;">Clientlly Affiliate Program</p>
          </div>
          <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:28px 32px;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 8px;font-weight:600;color:#4338ca;width:140px;">👤 Emri:</td>
                <td style="padding:12px 8px;color:#111827;font-size:15px;">${data.name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 8px;font-weight:600;color:#4338ca;">📧 Email:</td>
                <td style="padding:12px 8px;color:#111827;font-size:15px;"><a href="mailto:${data.email}" style="color:#4f46e5;">${data.email}</a></td>
              </tr>
              <tr style="border-bottom:1px solid #f3f4f6;">
                <td style="padding:12px 8px;font-weight:600;color:#4338ca;">📞 Telefoni:</td>
                <td style="padding:12px 8px;color:#111827;font-size:15px;">${data.phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px;font-weight:600;color:#4338ca;vertical-align:top;">💡 Metoda:</td>
                <td style="padding:12px 8px;color:#111827;font-size:15px;line-height:1.6;">${data.method}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;">
              <p style="margin:0;color:#15803d;font-size:13px;font-weight:600;">✅ Veprim i rekomanduar: Dërgoni email konfirmimi tek <a href="mailto:${data.email}" style="color:#15803d;">${data.email}</a> dhe jepni linkun e tyre unik të referimit brenda 24-48 orësh.</p>
            </div>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:16px;">Aplikim i dërguar nga faqja e afilimit — clientlly.com/affiliate</p>
        </div>
      `,
    });

    console.log(`Affiliate application email sent from ${data.email}`);
    return true;
  } catch (error) {
    console.error('SendGrid affiliate email error:', error);
    return false;
  }
}
