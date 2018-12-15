export interface IRoute {
  path: string[];
  target: string;
  prependPath?: boolean;
  changeOrigin?: boolean;
}
