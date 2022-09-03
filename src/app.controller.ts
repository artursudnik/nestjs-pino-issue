import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ThrowExceptionGuard } from './guards/throw-exception.guard';
import { ControllerException } from './exceptions/controller.exception';
import { PinoLogger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext(AppController.name);
  }

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
