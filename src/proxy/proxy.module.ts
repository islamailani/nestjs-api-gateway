import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import * as httpProxy from 'http-proxy-middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [ConfigService],
})
export class ProxyModule implements NestModule {
  constructor(private readonly config: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    this.config.getGatewayRoutes().map(route => {
      const options: httpProxy.Config = {
        target: route.target,
        changeOrigin: route.changeOrigin || true,
        prependPath: route.prependPath || false,
        logLevel: 'debug',
      };

      consumer
        .apply(httpProxy(route.path, options))
        .forRoutes('*');
    });
  }
}
