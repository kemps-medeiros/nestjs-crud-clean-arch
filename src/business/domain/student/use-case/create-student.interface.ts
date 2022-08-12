import IUseCase from 'src/business/common/use-case/use-case.interface';
import ICreateStudentDto from './dto/input/create-student.dto.interface';
import IStudentDto from './dto/output/student.dto.interface';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface ICreateStudentUseCase
  extends IUseCase<ICreateStudentDto, IStudentDto> {}
