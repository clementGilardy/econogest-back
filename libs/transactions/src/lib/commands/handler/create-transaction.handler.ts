import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTransactionCommand } from '../impl/create-transaction.command';
import { TransactionsService } from '../../services/transactions.service';

@CommandHandler(CreateTransactionCommand)
export class CreateTransactionHandler
  implements ICommandHandler<CreateTransactionCommand>
{
  constructor(private readonly transactionService: TransactionsService) {}

  async execute(command: CreateTransactionCommand) {
    const { transaction } = command;
    return this.transactionService.createTransaction(transaction);
  }
}
