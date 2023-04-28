import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SignUpRequest } from './dto/signup.request';
import { SignUpUseCase } from '../usecase/signup.usecase';
import { QueryUserResponse } from './dto/queryUser.response';
import { QueryUserUseCase } from '../usecase/queryUser.usecase';

@Controller('/users')
export class UserController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly queryUserUseCase: QueryUserUseCase,
  ) {}

  @Post('/signup')
  public signUp(@Body() request: SignUpRequest): Promise<string> {
    return this.signUpUseCase.execute(request);
  }

  @Get(':accountId')
  public getUserByAccountId(
    @Param('accountId', ParseIntPipe) accountId: number,
  ): Promise<QueryUserResponse | null> {
    return this.queryUserUseCase.execute(accountId);
  }
}
