import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Sneakers Bot')
    .setDescription('The Sneakers Bot API')
    .setVersion('1.0')
    .addTag('bot')
    .build();
  app.enableCors({
    methods: ['GET','PUT','PATCH','POST','DELETE'],
    allowedHeaders: ['Access-Control-Allow-Methods', 'content-type']
  });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
