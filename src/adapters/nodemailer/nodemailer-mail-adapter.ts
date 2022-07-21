import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9211ba844b933c",
    pass: "36a56ce6bfe51b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body}: SendMailData ) {
    await  transport.sendMail({
    from: 'Equipe feedget <oi@arnobioaires.com>',
    to: 'Arnobio Aires<arnobioaires@gmail.com>',
    subject,
    html: body,
})
    

  }
}