import { Controller, Get } from '@nestjs/common';

@Controller('foods')
export class FoodsController {

  @Get()
  getFoods(): string {
    return 'Hello from FoodsController';
  }
}