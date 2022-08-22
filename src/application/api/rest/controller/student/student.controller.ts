import {
  Body,
  Controller,
  Delete,
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
  RemoveStudentUseCaseToken,
  UpdateStudentUseCaseToken,
} from '../../../../dependecy-inversion/token/student.token';
import ICreateStudentUseCase from '../../../../../business/domain/student/use-case/create-student.interface';
import IGetStudentByIdUseCase from '../../../../../business/domain/student/use-case/get-student-by-id.interface';
import IListStudentsUseCase from '../../../../../business/domain/student/use-case/list-students.interface';
import IRemoveStudentUseCase from '../../../../../business/domain/student/use-case/remove-student.interface';
import IUpdateStudentUseCase from '../../../../../business/domain/student/use-case/update-student.interface';
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

    @Inject(RemoveStudentUseCaseToken)
    readonly removeStudentUseCase: IRemoveStudentUseCase,

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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.removeStudentUseCase.execute(id);
  }
}
