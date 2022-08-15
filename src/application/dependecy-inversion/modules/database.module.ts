import { Inject, Module, Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SqliteDataSourceToken } from '../token/app.token';

const providers: Provider[] = [
  {
    provide: SqliteDataSourceToken,
    useFactory: async () => {
      return new DataSource({
        type: 'sqlite',
        entities: [
          __dirname +
            '/../../../infrastructure/persistence/typeorm/**/*.entity{.ts,.js}',
        ],
        database: 'student-database',
        synchronize: true,
      });
    },
  },
];

@Module({
  providers: [...providers],
  exports: [...providers],
})
export default class DatabaseModule {
  constructor(@Inject(SqliteDataSourceToken) private dataSource: DataSource) {}

  async onModuleInit() {
    await this.dataSource?.initialize();
  }
}
