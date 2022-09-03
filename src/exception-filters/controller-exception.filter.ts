import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpServer, Logger } from '@nestjs/common';
import { ControllerException } from '../exceptions/controller.exception';

@Catch(ControllerException)
export class ControllerExceptionFilter extends BaseExceptionFilter {
  constructor(server: HttpServer, private readonly logger: Logger) {
    super(server);
  }

  catch(exception: ControllerException, host: ArgumentsHost) {
    this.logger.error(exception.stack);
    super.catch(exception, host);
  }
}
