import { Module } from '@nestjs/common';
import DatabaseModule from './modules/database.module';
import UuidGeneratorModule from './modules/uuid-generator.module';
import { StudentModule } from './student.module';

@Module({
  imports: [DatabaseModule, UuidGeneratorModule, StudentModule],
})
export class AppModule {}
