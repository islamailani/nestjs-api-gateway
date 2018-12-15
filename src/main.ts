import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import * as httpProxy from 'http-proxy-middleware';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const server = express();

  const config = new ConfigService();
  const gatewayRoutes = config.getGatewayRoutes();

  gatewayRoutes.map(route => {
    const options: httpProxy.Config = {
      target: route.target,
      changeOrigin: route.changeOrigin || true,
      prependPath: route.prependPath || false,
      logLevel: 'debug',
    };
    server.use(httpProxy(route.path, options));
  });

  const app = await NestFactory.create(AppModule, server);
  await app.listen(8080);
}
bootstrap();
