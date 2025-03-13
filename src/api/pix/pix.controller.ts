import { Controller, Post, Body } from '@nestjs/common';
import { PixService } from './pix.service';
import { CreatePixDto } from './dto/create-pix.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Pix } from './entities/pix.entity';
import { ErrorPixType } from './entities/pix.error.type';

@Controller('pix')
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'O pix foi criado com sucesso',
    type: Pix,
  })
  @ApiResponse({
    status: 400,
    description: 'O pix não foi criado',
    type: ErrorPixType,
  })
  create(@Body() createPixDto: CreatePixDto) {
    return this.pixService.create(createPixDto);
  }
}
