import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({  
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'X-Requested-With,content-type',
    credentials: true,
  });  
  await app.listen(5000);
}
bootstrap();
