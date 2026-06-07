import { onRequest } from 'firebase-functions/v2/https';
import * as nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  agency?: string;
  email: string;
  message: string;
}

const GMAIL_USER = process.env.GMAIL_USER ?? '';
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD ?? '';
const TO_EMAIL = 'cgumucio93@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

export const sendContactEmail = onRequest(
  { region: 'us-east1', cors: ['https://solaris-inovations.web.app'] },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { name, agency, email, message } = req.body as ContactPayload;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Basic email format check
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      res.status(400).json({ error: 'Invalid email' });
      return;
    }

    try {
      await transporter.sendMail({
        from: `"${name}" <${GMAIL_USER}>`,
        to: TO_EMAIL,
        replyTo: email,
        subject: `[Solaris] Nuevo contacto${agency ? ` — ${agency}` : ''}`,
        text: [
          `Nombre: ${name}`,
          `Agencia: ${agency ?? '—'}`,
          `Email: ${email}`,
          '',
          message,
        ].join('\n'),
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Agencia:</strong> ${agency ?? '—'}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr/>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
      });

      res.status(200).json({ ok: true });
    } catch (err) {
      console.error('sendContactEmail error', err);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
);
