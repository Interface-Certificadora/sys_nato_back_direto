import { Module } from '@nestjs/common';
import { PixModule } from './api/pix/pix.module';
import { PrismaService } from './prisma/prisma.service';
import { ClienteModule } from './api/cliente/cliente.module';

@Module({
  imports: [PixModule, ClienteModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
