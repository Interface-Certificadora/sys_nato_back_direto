import { Module } from '@nestjs/common';
import { PixModule } from './api/pix/pix.module';

@Module({
  imports: [PixModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
