import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ErrorClienteType } from './entities/cliente.error.entity';
import { Cliente } from './entities/cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cliente criado com sucesso',
    type: CreateClienteDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar cliente',
    type: ErrorClienteType,
  })
  async create(@Body() createClienteDto: CreateClienteDto) {
    return await this.clienteService.create(createClienteDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Clientes encontrados com sucesso',
    type: [CreateClienteDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar clientes',
    type: ErrorClienteType,
  })
  async findAll() {
    return await this.clienteService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Cliente encontrado com sucesso',
    type: Cliente,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar cliente',
    type: ErrorClienteType,
  })
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Cliente atualizado com sucesso',
    type: Cliente,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar cliente',
    type: ErrorClienteType,
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return await this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Cliente deletado com sucesso',
    type: Cliente,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao deletar cliente',
    type: ErrorClienteType,
  })
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
