import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestRequest } from './dto/test.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':userId')
  getPathValue(@Param('userId') id: string): string {
    return id;
  }

  @Post('/dto')
  dtoTest(@Body() request: TestRequest): object {
    return request;
  }
}
