import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';

if (!process.env.BREVO_API_KEY) {
  console.warn("BREVO_API_KEY environment variable not set. Email functionality will be limited.");
}

// Initialize Brevo API
const emailAPI = new TransactionalEmailsApi();
if (process.env.BREVO_API_KEY) {
  (emailAPI as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    if (!process.env.BREVO_API_KEY) {
      console.error('Brevo API key not configured');
      return false;
    }

    const message = new SendSmtpEmail();
    message.subject = params.subject;
    message.textContent = params.text;
    message.htmlContent = params.html;
    message.sender = { 
      name: "BusinessFlow Pro", 
      email: params.from 
    };
    message.to = [{ 
      email: params.to 
    }];

    const result = await emailAPI.sendTransacEmail(message);
    console.log('Email sent successfully:', result.body.messageId);
    return true;
  } catch (error) {
    console.error('Brevo email error:', error);
    return false;
  }
}

export default { sendEmail };