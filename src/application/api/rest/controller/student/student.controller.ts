import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  CreateStudentUseCaseToken,
  ListStudentsUseCaseToken,
} from 'src/application/dependecy-inversion/token/student.token';
import ICreateStudentUseCase from 'src/business/domain/student/use-case/create-student.interface';
import IListStudentsUseCase from 'src/business/domain/student/use-case/list-students.interface';
import CreateStudentRequest from './request/create-student.request';

@Controller('student')
export default class StudentController {
  constructor(
    @Inject(CreateStudentUseCaseToken)
    readonly createStudentUseCase: ICreateStudentUseCase,

    @Inject(ListStudentsUseCaseToken)
    readonly listStudentsUseCase: IListStudentsUseCase,
  ) {}

  @Post()
  async create(@Body() createStudentRequest: CreateStudentRequest) {
    return await this.createStudentUseCase.execute(createStudentRequest);
  }

  @Get()
  async getAll() {
    return await this.listStudentsUseCase.execute();
  }
}
