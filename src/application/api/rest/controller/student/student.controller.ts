import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateStudentUseCaseToken,
  GetStudentByIdUseCaseToken,
  ListStudentsUseCaseToken,
  UpdateStudentUseCaseToken,
} from 'src/application/dependecy-inversion/token/student.token';
import ICreateStudentUseCase from 'src/business/domain/student/use-case/create-student.interface';
import IGetStudentByIdUseCase from 'src/business/domain/student/use-case/get-student-by-id.interface';
import IListStudentsUseCase from 'src/business/domain/student/use-case/list-students.interface';
import IUpdateStudentUseCase from 'src/business/domain/student/use-case/update-student.interface';
import CreateStudentRequest from './request/create-student.request';
import UpdateStudentRequest from './request/update-student.request';

@Controller('student')
export default class StudentController {
  constructor(
    @Inject(CreateStudentUseCaseToken)
    readonly createStudentUseCase: ICreateStudentUseCase,

    @Inject(ListStudentsUseCaseToken)
    readonly listStudentsUseCase: IListStudentsUseCase,

    @Inject(UpdateStudentUseCaseToken)
    readonly updateStudentUseCase: IUpdateStudentUseCase,

    @Inject(GetStudentByIdUseCaseToken)
    readonly getStudentByIdUseCase: IGetStudentByIdUseCase,
  ) {}

  @Post()
  async create(@Body() createStudentRequest: CreateStudentRequest) {
    return await this.createStudentUseCase.execute(createStudentRequest);
  }

  @Get()
  async getAll() {
    return await this.listStudentsUseCase.execute();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return await this.getStudentByIdUseCase.execute(id);
  }

  @Put(':id')
  async edit(@Param('id') id: string, @Body() request: UpdateStudentRequest) {
    request.id = id;
    return await this.updateStudentUseCase.execute(request);
  }
}
