module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'rootpass',
  database: 'api_gateway_test1',
  entities: ['src/**/**.entity.ts'],
  synchronize: true,
  logging: true,
};
