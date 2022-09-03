import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ThrowExceptionGuard } from './guards/throw-exception.guard';
import { ControllerException } from './exceptions/controller.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('controller-exception')
  throwError(): string {
    throw new ControllerException('controller exception');
    return 'this is not going to be returned';
  }

  @Get('guard-exception')
  @UseGuards(ThrowExceptionGuard)
  throwGuardException() {
    return 'this is not going to be returned';
  }
}
