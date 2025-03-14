import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto {
  @ApiProperty({
    description: 'Nome Do cliente',
    example: 'João da Silva',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'nome deve ser uma string',
  })
  nome?: string;

  @ApiProperty({
    description: 'Telefone Do cliente',
    example: '11999999999',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'telefone deve ser uma string',
  })
  telefone?: string;

  @ApiProperty({
    description: 'Email Do cliente',
    example: 'qKZV5@example.com',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'email deve ser uma string',
  })
  email?: string;

  @ApiProperty({
    description: 'Data de Nascimento Do cliente',
    example: '2000-01-01',
    type: String,
  })
  @IsOptional()
  @IsString({
    message: 'dt_nascimento deve ser uma string',
  })
  dt_nascimento?: string;
}
