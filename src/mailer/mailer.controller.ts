import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send-email')
  async sendMail() {
    const dto: SendEmailDto = {
      from: {
        name: 'John Doe',
        address: 'john.doe@example.com.br',
      },
      recipients: [
        {
          name: 'John Doe',
          address: 'john.doe@example.com.br',
        },
      ],
      subject: 'Test Email',
      html: '<p>This is an email test.</p>',
    };

    return await this.mailerService.sendEmail(dto);
  }
}
