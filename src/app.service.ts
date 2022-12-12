import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello({ name }): { name: string } {
    return { name };
  }
}
