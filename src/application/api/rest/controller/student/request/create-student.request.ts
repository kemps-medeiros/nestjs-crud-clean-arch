import { IsInt, IsPhoneNumber, Length } from 'class-validator';
import ICreateStudentDto from 'src/business/domain/student/use-case/dto/input/create-student.dto.interface';

export default class CreateStudentRequest implements ICreateStudentDto {
  @Length(2, 100)
  name: string;

  @IsInt()
  registration: number;

  @IsPhoneNumber('BR')
  phoneNumber: string;
}
