/* eslint-disable @typescript-eslint/no-empty-interface */
import IUseCase from 'src/business/common/use-case/use-case.interface';
import IStudentDto from './dto/output/student.dto.interface';

export default interface IGetStudentByIdUseCase
  extends IUseCase<string, IStudentDto> {}
