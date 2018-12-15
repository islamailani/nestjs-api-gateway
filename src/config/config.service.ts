import { Injectable } from '@nestjs/common';
import { IProxy } from '../gateway/proxy.interface';
import { IConfigService } from './config.interface';

@Injectable()
export class ConfigService implements IConfigService {
  getGatewayRoutes(): IProxy[] {
    return [
      {
        path: ['/api/**'],
        target: 'https://reqres.in',
      },
      {
        path: ['/v1/**'],
        target: 'http://localhost:3000',
      },
      {
        path: ['/albums', '/posts'],
        target: 'https://jsonplaceholder.typicode.com',
      },
    ];
  }
}
