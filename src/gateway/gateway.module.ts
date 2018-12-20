import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as httpProxy from 'http-proxy-middleware';
import { GatewayService } from './gateway.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GatewayService],
})
export class GatewayModule implements NestModule {
  constructor(private readonly gatewayService: GatewayService) {}

  /**
   * Apply http-proxy-middleware for Gateway Routes.
   * For more information, see: https://github.com/chimurai/http-proxy-middleware
   * @param consumer
   */
  configure(consumer: MiddlewareConsumer) {
    this.gatewayService.getJsonRoutes().map(routeOptions => {
      const proxyPath = routeOptions.path;
      delete routeOptions.path;
      const proxyOptions = {
        ...this.gatewayService.getDefaultOptions(),
        ...routeOptions,
      };
      consumer.apply(httpProxy(proxyPath, proxyOptions)).forRoutes('*');
    });
  }
}
