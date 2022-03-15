export default async function (req, res) {
  const sgMail = require("@sendgrid/mail");
  require("dotenv").config();

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.recaptcha}`;

  const captchaRes = await fetch(VERIFY_URL, {
    method: "POST",
  });

  if (!captchaRes.ok) {
    console.error("Error verifying captcha.");
    res.status(500);
    res.end();
  }

  const captchaVerify = await captchaRes.json();

  if (!captchaVerify.success) {
    console.error("Invalid captcha.");
    res.status(500);
    res.end();
  }
  
  req.body.message = req.body.message.replace(/(?:\r\n|\r|\n)/g, '<br>');

  const options = {
    from: process.env.SENDGRID_SENDER,
    to: process.env.SENDGRID_RECIPIENT,
    subject: `[Ronday] Help - New submission`,
    templateId: "d-4d0a2a8c7be7496b8e07509cbc89ee91",
    dynamic_template_data: { ...req.body },
  };
  
  try {
    await sgMail.send(options);
    res.status(200);
  } catch (e) {
    console.error("/api/contact - error: ", e);
    res.status(500);
  }
  
  res.end();
}
