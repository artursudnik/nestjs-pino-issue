import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpServer } from '@nestjs/common';
import { GuardException } from '../exceptions/guard.exception';
import { PinoLogger } from 'nestjs-pino';

@Catch(GuardException)
export class GuardExceptionFilter extends BaseExceptionFilter {
  constructor(server: HttpServer, private readonly logger: PinoLogger) {
    logger.setContext(GuardExceptionFilter.name);
    super(server);
  }

  catch(exception: GuardException, host: ArgumentsHost) {
    this.logger.error(exception);
    super.catch(exception, host);
  }
}
