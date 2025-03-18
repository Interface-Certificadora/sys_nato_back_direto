import { ApiResponseProperty } from '@nestjs/swagger';

export class Cliente {
  @ApiResponseProperty({ type: Number })
  id: number;

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

  @ApiResponseProperty({ type: Date })
  createdAt: Date;

  @ApiResponseProperty({ type: Date })
  updatedAt: Date;

  @ApiResponseProperty({ type: String })
  imagemQrcode: string;

  @ApiResponseProperty({ type: String })
  pixCopiaECola: string;

  @ApiResponseProperty({ type: String })
  qrcode: string;

  @ApiResponseProperty({ type: String })
  txid: string;

  @ApiResponseProperty({ type: Number })
  valor: number;

  constructor(partial: Partial<Cliente>) {
    Object.assign(this, partial);
  }
}
