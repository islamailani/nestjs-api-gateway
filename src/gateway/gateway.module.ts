import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import * as httpProxy from 'http-proxy-middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [ConfigService],
})
export class GatewayModule implements NestModule {
  constructor(private readonly config: ConfigService) {}

  /**
   * Apply http-proxy-middleware for Gateway Routes.
   * For more information, see: https://github.com/chimurai/http-proxy-middleware
   * @param consumer
   */
  configure(consumer: MiddlewareConsumer) {
    this.config.getGatewayRoutes().map(routeOptions => {
      const proxyPath = routeOptions.path;
      delete routeOptions.path;
      const proxyOptions = {
        ...this.config.getDefaultOptions(),
        ...routeOptions,
      };
      consumer
        .apply(httpProxy(proxyPath, proxyOptions))
        .forRoutes('*');
    });
  }
}
