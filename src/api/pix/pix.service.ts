import { HttpException, Injectable } from '@nestjs/common';
import { CreatePixDto } from './dto/create-pix.dto';
import { ErrorPixType } from './entities/pix.error.type';
import EfiPay from 'sdk-typescript-apis-efi';
import path from 'path';

@Injectable()
export class PixService {
  constructor() {}

  async create(createPixDto: CreatePixDto) {
    // const clientId = process.env.CLIENT_ID;
    // const clientSecret = process.env.CLIENT_SECRET;
    // const certUser = process.env.EFI_PIX_CERT_PATH;

    const clientId = process.env.CLIENT_ID_SANDBOX;
    const clientSecret = process.env.CLIENT_SECRET_SANDBOX;
    const certUser = process.env.CERT_USER_SANDBOX;

    const rota = path.join(process.cwd(), certUser);

    const Option = {
      sandbox: true,
      client_id: clientId,
      client_secret: clientSecret,
      certificate: rota,
      cert_base64: false,
    };

    const { cpf, nome, valor } = createPixDto;

    try {
      const body = {
        calendario: { expiracao: 3600 },
        devedor: { cpf, nome },
        valor: { original: valor },
        chave: process.env.CHAVE_PIX,
        //passar url de retorno
        //urlRetorno: 'https://www.sisnato.com.br',
        urlRetorno: 'https://www.sisnato.com.br/pix',
      };

      const efipay = new EfiPay(Option);
      const PixPaymentCreate: any = await efipay.pixCreateImmediateCharge(
        null,
        body,
      );

      // const QrCode = await QRCode.toDataURL(PixPaymentCreate.location);
      const QrCode: any = await this.QrCodeEfi(PixPaymentCreate.loc.id);

      const dataPix = {
        ...PixPaymentCreate,
        ...QrCode,
      };
      console.log('🚀 ~ PixService ~ create ~ dataPix:', dataPix);
      return dataPix;
    } catch (error) {
      console.log('🚀 ~ PixService ~ create ~ error:', error);
      const retorno: ErrorPixType = {
        message:
          error.response?.data?.message || error.message || 'Erro Desconhecido',
      };
      throw new HttpException(retorno, 500);
    }
  }

  async QrCodeEfi(id: string) {
    try {
      // const clientId = process.env.CLIENT_ID;
      // const clientSecret = process.env.CLIENT_SECRET;
      // const certUser = process.env.EFI_PIX_CERT_PATH;

      const clientId = process.env.CLIENT_ID_SANDBOX;
      const clientSecret = process.env.CLIENT_SECRET_SANDBOX;
      const certUser = process.env.CERT_USER_SANDBOX;

      const rota = path.join(process.cwd(), certUser);

      const Option = {
        sandbox: true,
        client_id: clientId,
        client_secret: clientSecret,
        certificate: rota,
        cert_base64: false,
      };

      const params: any = {
        id: id,
      };

      const efipay = new EfiPay(Option);
      // O método pixGenerateQRCode indica os campos que devem ser enviados e que serão retornados
      const result = await efipay.pixGenerateQRCode(params);

      return result;
    } catch (error) {
      console.log('🚀 ~ PixService ~ QrCode ~ error:', error);
      throw new HttpException({ message: error.message }, 500);
    }
  }

  async PixPaymentStatus(Txid: string) {
    // const clientId = process.env.CLIENT_ID;
    // const clientSecret = process.env.CLIENT_SECRET;
    // const certUser = process.env.EFI_PIX_CERT_PATH;

    const clientId = process.env.CLIENT_ID_SANDBOX;
    const clientSecret = process.env.CLIENT_SECRET_SANDBOX;
    const certUser = process.env.CERT_USER_SANDBOX;

    const rota = path.join(process.cwd(), certUser);

    const Option = {
      sandbox: true,
      client_id: clientId,
      client_secret: clientSecret,
      certificate: rota,
      cert_base64: false,
    };

    try {
      const params = {
        txid: Txid,
      };

      const efipay = new EfiPay(Option);

      // O método pixDetailCharge indica os campos que devem ser enviados e que serão retornados
      const result = await efipay.pixDetailCharge(params);
      console.log('🚀 ~ PixService ~ PixPaymentStatus ~ result:', result);

      return result;
    } catch (error) {
      console.log('🚀 ~ PixService ~ QrCode ~ error:', error);
      throw new HttpException({ message: error.message }, 500);
    }
  }
}
