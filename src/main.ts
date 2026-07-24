import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 解析 cookie
  app.use(cookieParser());

  // 构建swagger文档
  const options = new DocumentBuilder()
    .setTitle('apis接口文档')
    .setDescription('Background system based on Nest.js full stack development')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  // 启用全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 启用自动转换，例如将字符串转换为数字
      whitelist: true, // 启用白名单功能，自动去除没有在 DTO 中定义的属性
      forbidNonWhitelisted: true, // 启用严格模式，如果请求中包含未定义的字段，则抛出错误
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
