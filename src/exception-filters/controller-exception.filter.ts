import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpServer } from '@nestjs/common';
import { ControllerException } from '../exceptions/controller.exception';
import { PinoLogger } from 'nestjs-pino';

@Catch(ControllerException)
export class ControllerExceptionFilter extends BaseExceptionFilter {
  constructor(server: HttpServer, private readonly logger: PinoLogger) {
    logger.setContext(ControllerExceptionFilter.name);
    super(server);
  }

  catch(exception: ControllerException, host: ArgumentsHost) {
    this.logger.error(exception.stack);
    super.catch(exception, host);
  }
}
