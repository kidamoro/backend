import { Controller, Get } from '@nestjs/common';

@Controller('foods')
export class FoodsController {
  @Get()
  getFoods() {
    return 'get all foods';
  }
}
