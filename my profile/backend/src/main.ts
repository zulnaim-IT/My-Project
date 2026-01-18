import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Enable validation
  app.useGlobalPipes(new ValidationPipe());

  // Set global prefix
  app.setGlobalPrefix('api');

  await app.listen(3001);
  console.log('Backend server running on http://localhost:3001');
}
bootstrap();
