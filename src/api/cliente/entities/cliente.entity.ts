import { ApiResponseProperty } from '@nestjs/swagger';

export class Cliente {
  @ApiResponseProperty({ type: String })
  nome: string;

  @ApiResponseProperty({ type: String })
  cpf: string;

  @ApiResponseProperty({ type: String })
  telefone: string;

  @ApiResponseProperty({ type: String })
  email: string;

  @ApiResponseProperty({ type: Date })
  dt_nascimento: Date;

  constructor(partial: Partial<Cliente>) {
    Object.assign(this, partial);
  }
}
