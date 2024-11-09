import { Controller, Get } from '@nestjs/common';

@Controller('transactions')
export class TransactionsController {
  @Get()
  gtData() {
    return { test: 'test' };
  }
}
