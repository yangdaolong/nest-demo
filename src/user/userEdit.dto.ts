import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';
import { UserBaseDto } from './userBase.dto';
//通过PartialType可以返回一个所有输入都是可选的参数
export class UserEditDto extends PartialType(UserBaseDto) {
  @ApiProperty({
    description: '更新时间戳（乐观锁）',
    example: '2024-01-01T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  updatedAt: string;
}
