import { Module } from '@nestjs/common';
import { DataExtractionController } from './dataExtraction.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [DataExtractionController],
  exports: [],
})
export class DataExtractionModule {}
