import { Controller, Post, Body } from '@nestjs/common';
import AbstractController from 'src/abstract.controller';

@Controller('dataExtraction')
export class DataExtractionController extends AbstractController {
  @Post()
  async extractData(@Body() file: string) {
    try {
      const parts = file.split(' ');

      const name = parts.slice(0, -2).join(' ');
      const cin = parts[parts.length - 2];
      const income = parts[parts.length - 1];

      return this.successResponse(
        {
          name: name,
          cin: cin,
          income: income,
        },
        'OCR operation was successfull',
      );
    } catch (error) {
      return this.internalErrorResponse(null, 'Failed to extract data');
    }
  }
}
