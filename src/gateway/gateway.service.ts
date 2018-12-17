import { Injectable } from '@nestjs/common';
import { IGatewayService } from './gateway.interface';

import * as routes from '../config/routes.json';

@Injectable()
export class GatewayService implements IGatewayService {
  getDefaultOptions(): object {
    return {
      logLevel: 'debug',
      changeOrigin: true,
      prependPath: false,
    };
  }

  getJsonRoutes(): any {
    return routes;
  }
}
