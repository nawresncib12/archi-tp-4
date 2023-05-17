import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataExtractionController } from './dataExtraction/dataExtraction.controller';
import { DataExtractionModule } from './dataExtraction/dataExtraction.module';

@Module({
  imports: [DataExtractionModule],
  controllers: [AppController, DataExtractionController],
  providers: [AppService],
})
export class AppModule {}
