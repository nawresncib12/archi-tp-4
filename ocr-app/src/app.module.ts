import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataExtractionController } from './dataExtraction/dataExtraction.controller';

@Module({
  imports: [],
  controllers: [AppController, DataExtractionController],
  providers: [AppService],
})
export class AppModule {}
