import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UserBaseDto {
  @ApiProperty({ description: '用户名', example: 'john_doe' })
  @IsString()
  @Length(2, 50)
  username: string;

  @ApiPropertyOptional({ description: '密码', example: '123456' })
  @IsOptional()
  @IsString()
  @Length(6, 100)
  password?: string;

  @ApiPropertyOptional({ description: '积分', example: 100, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  point?: number;

  @ApiPropertyOptional({ description: '等级', example: 1, default: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100, { message: '等级不能超过100' })
  level?: number;
}
