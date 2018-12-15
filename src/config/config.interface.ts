import { IRoute } from '../proxy/route.interface';

export interface IConfigService {
  getGatewayRoutes(): IRoute[];
}
