import { IProxy } from '../gateway/proxy.interface';

export interface IConfigService {
  getGatewayRoutes(): IProxy[];
}
