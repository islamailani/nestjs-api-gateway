## Nest JS API Gateway

NestJS API Gateway is an open source TypeScript API Gateway that uses the NestJS Framework and architecture patterns to implement a simple and reliable gateway proxy for your web services. 

Powered by [NestJS](https://github.com/nestjs/nest) and [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) (implementation of [http-proxy](https://github.com/nodejitsu/node-http-proxy)).

## Installation

```bash
$ npm i nestjs-api-gateway
```

## Running the gateway

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Credits

- nestjs-api-gateway - [Justin Wilson](https://github.com/getfigure7)
- NestJS - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- node-http-proxy - [Charlie Robbins](https://github.com/nodejitsu/node-http-proxy)
- http-proxy-middleware - [Steven Chim](https://github.com/chimurai/http-proxy-middleware)

## License

  Nest is [MIT licensed](LICENSE).