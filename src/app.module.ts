import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
