/* eslint-disable @typescript-eslint/no-empty-interface */
import IUseCase from 'src/business/common/use-case/use-case.interface';
import IStudentDto from './dto/output/student.dto.interface';

export default interface IListStudentsUseCase
  extends IUseCase<void, IStudentDto[]> {}
