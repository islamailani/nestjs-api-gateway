import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
