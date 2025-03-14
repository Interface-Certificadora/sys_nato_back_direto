import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
}
