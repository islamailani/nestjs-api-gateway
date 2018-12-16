import { IProxy } from '../gateway/proxy.interface';

export interface IConfigService {
  getDefaultOptions(): any;
  getGatewayRoutes(): IProxy[];
}
