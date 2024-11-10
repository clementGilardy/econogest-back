import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {

  constructor(private readonly transactionsService: TransactionsService) {
  }

  @Post()
  createTransaction(@Body() transaction: CreateTransactionDto) {
    return this.transactionsService.createTransaction(transaction);
  }
}
