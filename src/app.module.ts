import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局配置
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.db_host,
      port: Number(process.env.db_port),
      username: process.env.db_username,
      password: process.env.db_password,
      database: process.env.db_database,
      entities: [__dirname + '/entities/**/*.ts'],
      synchronize: false, // 开发环境自动创建表结构
      logging: true, // 日志输出SQL语句
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
