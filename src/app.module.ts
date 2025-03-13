import { Module } from '@nestjs/common';
import { PixModule } from './api/pix/pix.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PixModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
