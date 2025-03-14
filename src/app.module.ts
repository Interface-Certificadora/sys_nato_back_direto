import { Module } from '@nestjs/common';
import { PixModule } from './api/pix/pix.module';
import { ClienteModule } from './api/cliente/cliente.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PixModule, ClienteModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
