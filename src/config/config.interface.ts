import { IProxy } from '../proxy/proxy.interface';

export interface IConfigService {
  getGatewayRoutes(): IProxy[];
}
