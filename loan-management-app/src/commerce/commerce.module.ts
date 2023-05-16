import { Module } from '@nestjs/common';
import { CommerceService } from './commerce.service';

@Module({
  imports: [],
  providers: [CommerceService],
  controllers: [],
  exports: [CommerceService],
})
export class CommerceModule {}
