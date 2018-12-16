import { IProxy } from './proxy.interface';

export interface IGatewayService {
  getDefaultOptions(): any;
  getRoutes(): IProxy[];
}
