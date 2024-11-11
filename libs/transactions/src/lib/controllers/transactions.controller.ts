import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTransactionCommand } from '../commands/impl/create-transaction.command';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  createTransaction(@Body() transaction: CreateTransactionDto) {
    return this.commandBus.execute(new CreateTransactionCommand(transaction));
  }
}
