import { HttpException, Injectable } from '@nestjs/common';
import { CreatePixDto } from './dto/create-pix.dto';
import EfiPay from 'sdk-typescript-apis-efi';
import { ErrorPixType } from './entities/pix.error.type';

const apicredentials = {
  // PRODUÇÃO = false
  // HOMOLOGAÇÃO: true,
  sandbox: true,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  certificate: './utils/producao-449449-Cert21042023.p12',
  cert_base64: false,
};
@Injectable()
export class PixService {
  async create(createPixDto: CreatePixDto) {
    const { cpf, nome } = createPixDto;
    try {
      const body = {
        calendario: {
          expiracao: 3600,
        },
        devedor: {
          cpf: cpf,
          nome: nome,
        },
        valor: {
          original: '100.00', //dados.valorcd.replace(',', '.'),
        },
        chave: process.env.PIX_KEY,
      };

      const efipay = new EfiPay(apicredentials);
      const PixPaymentCreate = await efipay.pixCreateImmediateCharge([], body);
      return PixPaymentCreate;
    } catch (error) {
      console.log('🚀 ~ PixService ~ create ~ error:', error);
      const retorno: ErrorPixType = {
        message: error.message ? error.message : 'Erro Desconhecido',
      };
      throw new HttpException(retorno, 500);
    }
  }
}
