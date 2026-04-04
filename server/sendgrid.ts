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
