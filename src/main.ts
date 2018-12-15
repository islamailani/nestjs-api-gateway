import { NestFactory } from '@nestjs/core';
import * as proxy from 'http-proxy-middleware';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import * as express from 'express';

async function bootstrap() {
  const server = express();

  const config = new ConfigService();
  const gatewayRoutes = config.getGatewayRoutes();

  gatewayRoutes.map(route => {
    server.use(proxy(route.path, {
      target: route.target,
      changeOrigin: route.changeOrigin || true,
      prependPath: route.prependPath || false,
      logLevel: 'debug',
    }));
  });

  const app = await NestFactory.create(AppModule, server);
  await app.listen(8080);
}
bootstrap();
