/* eslint-disable @typescript-eslint/no-empty-interface */
import IUseCase from 'src/business/common/use-case/use-case.interface';
import IUpdateStudentDto from './dto/input/update-student.dto.interface';
import IStudentDto from './dto/output/student.dto.interface';

export default interface IUpdateStudentUseCase
  extends IUseCase<IUpdateStudentDto, IStudentDto> {}
