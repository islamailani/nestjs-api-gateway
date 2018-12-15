export interface IProxy {
  path: string[];
  target: string;
  prependPath?: boolean;
  changeOrigin?: boolean;
}
