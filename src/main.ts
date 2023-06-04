import { NestFactory } from '@nestjs/core';
// 导入Fastify
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  // 允许跨域
  app.enableCors();
  // 默认情况下，Fastify仅在localhost接口上监听
  await app.listen(3000);
}
bootstrap();
