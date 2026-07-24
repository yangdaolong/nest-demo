import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory() {
        const JWT_SECRET = process.env.jwt_secret;
        return {
          secret: JWT_SECRET,
          signOptions: {
            expiresIn: '30d',
          },
        };
      },
    }),

    forwardRef(() => UserModule),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard],
  exports: [JwtAuthGuard, JwtModule],
})
export class AuthModule {}
