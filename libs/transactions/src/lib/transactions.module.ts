import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { DatabaseModule } from '@econogest-back/database';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTransactionCommand } from './commands/impl/create-transaction.command';
import { CreateTransactionHandler } from './commands/handler/create-transaction.handler';

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    CreateTransactionCommand,
    CreateTransactionHandler,
  ],
  exports: [],
})
export class TransactionsModule {}
