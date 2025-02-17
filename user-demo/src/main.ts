import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('boostrap');
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('test-backend demo')
  .setDescription('User API description')
  .setVersion('1.0')
  .addTag('user')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  logger.log(`App started at port 3000`);

}
bootstrap();
