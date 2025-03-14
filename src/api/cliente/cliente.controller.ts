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
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
