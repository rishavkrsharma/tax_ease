import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // The email address where form submissions should be received
    const recipientEmail = process.env.CONTACT_EMAIL || 'askanytax@gmail.com';

    // Compose the email
    const mailOptions = {
      from: `"AnyTax.in Contact Form" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Inquiry — ${service || 'General'} | ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FDFBF6; border-radius: 16px; overflow: hidden; border: 1px solid #E2DFD6;">
          <!-- Header -->
          <div style="background: #0B1F3A; padding: 28px 32px;">
            <h1 style="color: #C9A84C; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">
              New Contact Form Submission
            </h1>
            <p style="color: #B0C4DE; margin: 6px 0 0; font-size: 13px;">
              Received from anytax.in contact page
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #7A8FA6; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; width: 140px; vertical-align: top;">
                  Name
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #0B1F3A; font-size: 15px; font-weight: 600;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #7A8FA6; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                  Phone
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #0B1F3A; font-size: 15px;">
                  ${phone || 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #7A8FA6; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #0B1F3A; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #C9A84C; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #7A8FA6; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                  Service
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2DFD6; color: #0B1F3A; font-size: 15px;">
                  <span style="background: #C9A84C; color: white; padding: 3px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                    ${service || 'Not specified'}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #7A8FA6; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; vertical-align: top;">
                  Message
                </td>
                <td style="padding: 12px 0; color: #0B1F3A; font-size: 15px; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #0B1F3A; padding: 16px 32px; text-align: center;">
            <p style="color: #7A8FA6; margin: 0; font-size: 11px; letter-spacing: 1px;">
              © ANYTAX.IN — Automated Contact Notification
            </p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
