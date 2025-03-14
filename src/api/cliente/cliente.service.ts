import { HttpException, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ErrorClienteType } from './entities/cliente.error.entity';
import { plainToClass } from 'class-transformer';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createClienteDto: CreateClienteDto) {
    try {
      const Exist = this.prismaService.nato_direto_clientes.findUnique({
        where: {
          cpf: createClienteDto.cpf,
        },
      });
      if (Exist) {
        return plainToClass(Cliente, Exist);
      }
      const req = await this.prismaService.nato_direto_clientes.create({
        data: {
          nome: createClienteDto.nome,
          cpf: createClienteDto.cpf,
          telefone: createClienteDto.telefone,
          email: createClienteDto.email,
          dt_nascimento: new Date(createClienteDto.dt_nascimento),
          dt_solicitacao: new Date(),
        },
      });
      if (!req) {
        const retorno: ErrorClienteType = {
          message: 'ERRO AO CRIAR CLIENTE',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(Cliente, req);
    } catch (error) {
      console.log(error);
      const retorno: ErrorClienteType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }
  }

  async findAll() {
    try {
      const request = await this.prismaService.nato_direto_clientes.findMany({
        orderBy: {
          dt_solicitacao: 'desc',
        },
      });
      if (!request) {
        const retorno: ErrorClienteType = {
          message: 'Erro ao buscar Clientes',
        };
        throw new HttpException(retorno, 400);
      }

      return request.map((item) => plainToClass(Cliente, item));
    } catch (error) {
      console.log(error);
      const retorno: ErrorClienteType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }
  }

  async findOne(id: number) {
    try {
      const request = await this.prismaService.nato_direto_clientes.findUnique({
        where: {
          id: id,
        },
      });
      if (!request) {
        const retorno: ErrorClienteType = {
          message: 'Erro ao buscar Cliente',
        };
        throw new HttpException(retorno, 400);
      }
      return plainToClass(Cliente, request);
    } catch (error) {
      console.log(error);
      const retorno: ErrorClienteType = {
        message: error.message ? error.message : 'ERRO DESCONHECIDO',
      };
      throw new HttpException(retorno, 400);
    }
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
