import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateStudentUseCaseToken } from 'src/application/dependecy-inversion/token/student.token';
import ICreateStudentUseCase from 'src/business/domain/student/use-case/create-student.interface';
import CreateStudentRequest from './request/create-student.request';

@Controller('student')
export default class StudentController {
  constructor(
    @Inject(CreateStudentUseCaseToken)
    readonly createStudentUseCase: ICreateStudentUseCase,
  ) {}

  @Post()
  async create(@Body() createStudentRequest: CreateStudentRequest) {
    return await this.createStudentUseCase.execute(createStudentRequest);
  }
}
