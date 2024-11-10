import { CreateTransactionDto } from '../dto/create-transaction.dto';

export class TransactionsService {
  public createTransaction(transaction: CreateTransactionDto) {
    return {test:"test"};
  }
}
