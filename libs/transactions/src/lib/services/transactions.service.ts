import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { PrismaService } from '@econogest-back/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  constructor(private readonly prismaService: PrismaService) {}
  public createTransaction(transaction: CreateTransactionDto) {
    return this.prismaService.transaction.create({ data: transaction });
  }
}
