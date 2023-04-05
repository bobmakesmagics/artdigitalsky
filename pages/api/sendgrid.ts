import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req: any, res: any) => {
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
    await sendgrid.send({
      to: process.env.ADMIN_EMAIL_ADDRESS,
      from: process.env.WEBSITE_EMAIL_ADDRESS,
      subject: `${name.toUpperCase()} sent you a message from Contact Form`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, '<br>'),
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error?.statusCode || 500).json({ errro: error?.message });
  }
  return res.status(200).json({ error: '' });
};

export default sendEmail;
