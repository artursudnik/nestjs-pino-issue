import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GuardExceptionFilter } from './exception-filters/guard-exception.filter';
import { Logger } from '@nestjs/common';
import { ControllerExceptionFilter } from './exception-filters/controller-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new ControllerExceptionFilter(
      app.getHttpAdapter(),
      new Logger(ControllerExceptionFilter.name),
    ),
  );

  app.useGlobalFilters(
    new GuardExceptionFilter(
      app.getHttpAdapter(),
      new Logger(GuardExceptionFilter.name),
    ),
  );

  await app.listen(3000);
}

bootstrap();
