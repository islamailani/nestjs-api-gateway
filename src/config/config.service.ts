import { Injectable } from '@nestjs/common';
import { IProxy } from '../gateway/proxy.interface';
import { IConfigService } from './config.interface';

@Injectable()
export class ConfigService implements IConfigService {
  getDefaultOptions(): object {
    return {
      logLevel: 'debug',
      changeOrigin: true,
      prependPath: false,
    };
  }

  getGatewayRoutes(): IProxy[] {
    return [
      {
        path: ['/api/**'],
        target: 'https://reqres.in',
      },
      {
        path: ['/v1/**'],
        target: 'http://localhost:3000',
        onProxyReq: (proxyReq, req, res) => {
          proxyReq.setHeader('X-Test', 'OK');
        },
      },
      {
        path: ['/albums', '/posts'],
        target: 'https://jsonplaceholder.typicode.com',
        logLevel: 'error', // Test for default option override.
      },
    ];
  }
}
