import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';

@Module({
  controllers: [TransactionsController],
  providers: [],
  exports: [],
})
export class TransactionsModule {}
