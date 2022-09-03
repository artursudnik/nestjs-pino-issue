import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpServer, Logger } from '@nestjs/common';
import { GuardException } from '../exceptions/guard.exception';

@Catch(GuardException)
export class GuardExceptionFilter extends BaseExceptionFilter {
  constructor(server: HttpServer, private readonly logger: Logger) {
    super(server);
  }

  catch(exception: GuardException, host: ArgumentsHost) {
    this.logger.error(exception);
    super.catch(exception, host);
  }
}
