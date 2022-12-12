import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// if want to start with /users --> @Controller('users')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type', 'application/json')
  getHello(): { name: string } {
    return this.appService.getHello({ name: 'Eneko' });
  }
}
