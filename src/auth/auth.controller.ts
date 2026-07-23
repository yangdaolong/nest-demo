/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Query,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '用户登录，返回 JWT 令牌' })
  async login(
    @Query('username') username: string,
    @Query('password') password: string,
    @Res({ passthrough: true }) res,
  ) {
    const user = await this.userService.findByUsername(username, password);
    if (!user) {
      throw new UnauthorizedException('用户名或密码错误');
    }

    const payload = {
      username: user.username,
      id: user.id,
      level: user.level,
      point: user.point,
    };
    const access_token = this.jwtService.sign(payload);
    // 存储 token 到 cookie
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.cookie('access_token', access_token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });
    return {
      access_token,
      token_type: 'bearer',
      expires_in: 3600,
    };
  }
}
