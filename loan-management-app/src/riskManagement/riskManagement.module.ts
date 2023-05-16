import { Module } from '@nestjs/common';
import { RiskManagementService } from './riskManagement.service';

@Module({
  imports: [],
  providers: [RiskManagementService],
  controllers: [],
  exports: [RiskManagementService],
})
export class RiskManagementModule {}
