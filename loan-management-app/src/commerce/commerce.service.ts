import { Injectable } from '@nestjs/common';
import AbstractController from 'src/abstract.controller';

@Injectable()
export class CommerceService extends AbstractController {
  getEligibility(income: string) {
    const parsedIncome = parseInt(income);
    if (!parsedIncome) return;
    if (parsedIncome < 500) {
      return 50;
    } else {
      return 200;
    }
  }
}
