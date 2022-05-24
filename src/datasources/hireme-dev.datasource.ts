import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'hireme_dev',
  connector: 'postgresql',
  url: 'postgres://postgres:Test1234!@database-1.cuulu2exkuto.us-west-2.rds.amazonaws.com/database',
  host: 'database-1.cuulu2exkuto.us-west-2.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'Test1234!',
  database: 'hireme-dev'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HiremeDevDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'hireme_dev';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.hireme_dev', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
