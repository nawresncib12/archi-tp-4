import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrchestrerController } from './orchestrer.controller';
import { CommerceModule } from './commerce/commerce.module';
import { RiskManagementModule } from './riskManagement/riskManagement.module';

@Module({
  imports: [CommerceModule, RiskManagementModule],
  controllers: [AppController, OrchestrerController],
  providers: [AppService],
})
export class AppModule {}
