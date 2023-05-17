import { Controller, Post, Body } from '@nestjs/common';
import AbstractController from './abstract.controller';
import axios from 'axios';
import { CommerceService } from './commerce/commerce.service';
import { RiskManagementService } from './riskManagement/riskManagement.service';
const OCR_API = 'http://localhost:3003';
const application_api = 'http://localhost:3000';

type ManageLoanBody = {
  id: number;
  file: string;
};

@Controller('orchestrer')
export class OrchestrerController extends AbstractController {
  constructor(
    private readonly commerceService: CommerceService,
    private readonly riskManagementService: RiskManagementService,
  ) {
    super();
  }

  @Post()
  async manageLoan(@Body() data: ManageLoanBody) {
    const { id, file } = data;
    try {
      const ocrExtractedData = await axios.post(`${OCR_API}/dataExtraction`, {
        file,
      });
      const { cin, income } = ocrExtractedData.data;
      // see eligibility via commercial service
      const commercialScoring = this.commerceService.getEligibility(income);
      if (commercialScoring < 100) {
        return this.successResponse(
          {
            id: id,
            loanStatus: 'non approved',
          },
          'loan refused',
        );
      }

      if (!this.riskManagementService.getEligibility(cin)) {
        return this.successResponse(
          {
            id: id,
            loanStatus: 'non approved',
          },
          'loan refused',
        );
      }

      await axios.post(
        `${application_api}/users/loanEligibility/${id}`,
        {
          eligibility: true,
        },
        {},
      );

      return this.successResponse(
        {
          id: id,
          loanStatus: 'approved',
        },
        'loan accepted',
      );
    } catch {
      return this.internalErrorResponse(null, 'Failed to manage loan');
    }
  }
}
