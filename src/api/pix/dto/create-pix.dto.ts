import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePixDto {
  @ApiProperty({
    description: 'cpf',
    example: '123.456.789-00',
    type: String,
  })
  @IsNotEmpty({
    message: 'cpf is required',
  })
  @IsString({
    message: 'cpf must be a string',
  })
  cpf: string;

  @ApiProperty({
    description: 'Nome',
    example: 'João da Silva',
    type: String,
  })
  @IsNotEmpty({
    message: 'nome is required',
  })
  @IsString({
    message: 'nome must be a string',
  })
  nome: string;

  @ApiProperty({
    description: 'Valor do pix',
    example: '100.00',
    type: String,
  })
  @IsNotEmpty({
    message: 'valor is required',
  })
  @IsString({
    message: 'valor must be a string',
  })
  valor: string;
}
