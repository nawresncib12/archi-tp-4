import { Injectable } from '@nestjs/common';
import AbstractController from 'src/abstract.controller';

@Injectable()
export class RiskManagementService extends AbstractController {
  getEligibility(cin: string) {
    try {
      //acces central bank api by cin
      const loans = Math.floor(Math.random() * 2);
      if (!loans) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return this.internalErrorResponse(null, 'Failed to access banks api');
    }
  }
}
