import {
  IsInt,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
  Length,
} from 'class-validator';
import IUpdateStudentDto from 'src/business/domain/student/use-case/dto/input/update-student.dto.interface';

export default class UpdateStudentRequest implements IUpdateStudentDto {
  @IsUUID(4)
  @IsOptional()
  id: string;

  @Length(2, 100)
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  registration?: number;

  @IsPhoneNumber('BR')
  @IsOptional()
  phoneNumber?: string;
}
