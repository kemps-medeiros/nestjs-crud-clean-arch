import IUpdateStudentDto from '../../../domain/student/use-case/dto/input/update-student.dto.interface';
import IStudentDto from '../../../domain/student/use-case/dto/output/student.dto.interface';
import StudentRepository from '../../../domain/student/repository/student.repository';
import IUpdateStudentUseCase from '../../../domain/student/use-case/update-student.interface';

export default class UpdateStudentUseCase implements IUpdateStudentUseCase {
  constructor(readonly studentRepository: StudentRepository) {}

  async execute(input: IUpdateStudentDto): Promise<IStudentDto> {
    const student = await this.studentRepository.findById(input.id);

    if (!student) {
      throw new Error('Student Not Found');
    }

    student.name = input.name || student.name;
    student.registration = input.registration || student.registration;
    student.phoneNumber = input.phoneNumber || student.phoneNumber;

    await this.studentRepository.edit(student);

    return {
      id: student.id,
      name: student.name,
      registration: student.registration,
      phoneNumber: student.phoneNumber,
    };
  }
}
