import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GuardExceptionFilter } from './exception-filters/guard-exception.filter';
import { Logger, LoggerErrorInterceptor, PinoLogger } from 'nestjs-pino';
import { ControllerExceptionFilter } from './exception-filters/controller-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useLogger(app.get(Logger));

  app.useGlobalFilters(
    new ControllerExceptionFilter(app.getHttpAdapter(), new PinoLogger({})),
  );

  app.useGlobalFilters(
    new GuardExceptionFilter(app.getHttpAdapter(), new PinoLogger({})),
  );

  await app.listen(3000);
}

bootstrap();
