import { Module } from '@nestjs/common';
import IUuidGeneratorAdapter from 'src/business/common/adapter/uuid-generator-adapter.interface';
import StudentRepository from 'src/business/domain/student/repository/student.repository';
import CreateStudentUseCase from 'src/business/services/student/use-case/create-student.use-case';
import GetStudentByIdUseCase from 'src/business/services/student/use-case/get-student-by-id.use-case';
import ListStudentsUseCase from 'src/business/services/student/use-case/list-students.use-case';
import RemoveStudentUseCase from 'src/business/services/student/use-case/remove-student.use-case';
import UpdateStudentUseCase from 'src/business/services/student/use-case/update-student.use-case';
import StudentTypeOrmRepository from 'src/infrastructure/persistence/typeorm/student/repository/student-typeorm.repository';
import { DataSource } from 'typeorm';
import StudentController from '../api/rest/controller/student/student.controller';
import DatabaseModule from './modules/database.module';
import UuidGeneratorModule from './modules/uuid-generator.module';
import {
  IdentifierGeneratorServiceToken,
  SqliteDataSourceToken,
} from './token/app.token';
import {
  CreateStudentUseCaseToken,
  GetStudentByIdUseCaseToken,
  ListStudentsUseCaseToken,
  RemoveStudentUseCaseToken,
  StudentRepositoryToken,
  UpdateStudentUseCaseToken,
} from './token/student.token';

@Module({
  imports: [UuidGeneratorModule, DatabaseModule],
  providers: [
    {
      provide: CreateStudentUseCaseToken,
      useFactory: (
        studentRepository: StudentRepository,
        uuidGeneratorAdapter: IUuidGeneratorAdapter,
      ) => {
        return new CreateStudentUseCase(
          studentRepository,
          uuidGeneratorAdapter,
        );
      },
      inject: [StudentRepositoryToken, IdentifierGeneratorServiceToken],
    },
    {
      provide: ListStudentsUseCaseToken,
      useFactory: (studentRepository: StudentRepository) => {
        return new ListStudentsUseCase(studentRepository);
      },
      inject: [StudentRepositoryToken],
    },
    {
      provide: UpdateStudentUseCaseToken,
      useFactory: (studentRepository: StudentRepository) => {
        return new UpdateStudentUseCase(studentRepository);
      },
      inject: [StudentRepositoryToken],
    },
    {
      provide: RemoveStudentUseCaseToken,
      useFactory: (studentRepository: StudentRepository) => {
        return new RemoveStudentUseCase(studentRepository);
      },
      inject: [StudentRepositoryToken],
    },
    {
      provide: GetStudentByIdUseCaseToken,
      useFactory: (studentRepository: StudentRepository) => {
        return new GetStudentByIdUseCase(studentRepository);
      },
      inject: [StudentRepositoryToken],
    },
    {
      provide: StudentRepositoryToken,
      useFactory: (dataSource: DataSource) => {
        return new StudentTypeOrmRepository(dataSource);
      },
      inject: [SqliteDataSourceToken],
    },
  ],
  controllers: [StudentController],
})
export class StudentModule {}
