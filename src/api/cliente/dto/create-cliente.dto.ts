import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nome Do cliente',
    example: 'João da Silva',
    type: String,
  })
  @IsNotEmpty({
    message: 'nome não pode ser vazio',
  })
  @IsString({
    message: 'nome deve ser uma string',
  })
  nome: string;

  @ApiProperty({
    description: 'Cpf Do cliente',
    example: '123.456.789-00',
    type: String,
  })
  @IsNotEmpty({
    message: 'cpf nao pode ser vazio',
  })
  @IsString({
    message: 'cpf deve ser uma string',
  })
  cpf: string;

  @ApiProperty({
    description: 'Telefone Do cliente',
    example: '11999999999',
    type: String,
  })
  @IsNotEmpty({
    message: 'telefone nao pode ser vazio',
  })
  @IsString({
    message: 'telefone deve ser uma string',
  })
  telefone: string;

  @ApiProperty({
    description: 'Email Do cliente',
    example: '7o5V2@example.com',
    type: String,
  })
  @IsNotEmpty({
    message: 'email nao pode ser vazio',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Data de nascimento Do cliente',
    example: '2000-01-01',
    type: String,
  })
  @IsNotEmpty({
    message: 'data de nascimento nao pode ser vazio',
  })
  @IsString({
    message: 'dt_nascimento deve ser uma string',
  })
  dt_nascimento: string;

  @ApiProperty({
    description: 'Financeiro',
    example: 1,
    type: Number,
  })
  @IsNotEmpty({
    message: 'financeiro nao pode ser vazio',
  })
  @IsNumber()
  financeiro: number;

  @ApiProperty({
    description: 'Pix Copia e Cola Gerado',
    example:
      '20:50:akjshdjkwabndjklawhjdjlanLJKHKJABNWJKLDHjdbnlamhjklhklajnhdu',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'pix deve ser uma string',
  })
  pixCopiaECola: string;

  @ApiProperty({
    description: 'QrCode Pix Gerado',
    example: 'abcjkeyfdjkwabndjkcnkvbdmhxgbdfnbcKLDHjdbnlamhjklhklajnhdu',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'qrcode deve ser uma string',
  })
  qrcode: string;

  @ApiProperty({
    description: 'txid do Pix gerado',
    example: 'ixHkalsIamJM',
    type: String,
  })
  @IsNotEmpty({
    message: 'id nao pode ser vazio',
  })
  @IsString({
    message: 'id deve ser uma string',
  })
  txid: string;

  @ApiProperty({
    description: 'Valor do Pix gerado',
    example: 100,
    type: Number,
  })
  @IsNotEmpty({
    message: 'id nao pode ser vazio',
  })
  @IsNumber()
  valor: number;

  @ApiProperty({
    description: 'ImagemQrCode do Pix gerado',
    example: 'abcjkeyfdjkwabndjkcnkvbdmhxgbdfnbcKLDHjdbnlamhjklhklajnhdu',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'qrcode deve ser uma string',
  })
  imagemQrCode: string;
}
