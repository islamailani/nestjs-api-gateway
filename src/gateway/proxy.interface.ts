import * as httpProxy from 'http-proxy-middleware';

export interface IProxy extends httpProxy.Config {
  path: string[];
  target: string;
  prependPath?: boolean;
  changeOrigin?: boolean;
}
