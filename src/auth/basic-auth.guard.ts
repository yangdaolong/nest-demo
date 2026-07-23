import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

const USERNAME = 'admin';
const PASSWORD = '123456';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnauthorizedException('缺少认证信息');
    }

    const base64 = authHeader.split(' ')[1];
    const [username, password] = Buffer.from(base64, 'base64')
      .toString()
      .split(':');

    if (username !== USERNAME || password !== PASSWORD) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    return true;
  }
}
