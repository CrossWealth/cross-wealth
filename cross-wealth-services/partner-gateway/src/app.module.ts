import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NgoPortalModule } from './ngo-portal/ngo-portal.module';
import { RemittanceApiModule } from './remittance-api/remittance-api.module';
import { AgentPortalModule } from './agent-portal/agent-portal.module';

@Module({
  imports: [NgoPortalModule, RemittanceApiModule, AgentPortalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
