import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransactionsType } from '../types';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  category!: string;

  @IsString()
  @IsNotEmpty()
  date!: string;

  @IsNotEmpty()
  @IsString()
  type!: TransactionsType;

  @IsString()
  @IsOptional()
  notes?: string;
}
