import Student from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import ICreateStudentUseCase from '../../../domain/student/use-case/create-student.interface';
import ICreateStudentDto from '../../../domain/student/use-case/dto/input/create-student.dto.interface';
import IStudentDto from '../../../domain/student/use-case/dto/output/student.dto.interface';
import UuidGeneratorAdapter from '../../../../infrastructure/adapter/uuid-generator.adapter';

export default class CreateStudentUseCase implements ICreateStudentUseCase {
  constructor(
    readonly studentRepository: StudentRepository,
    readonly uuidGeneratorAdapter: UuidGeneratorAdapter,
  ) {}

  async execute(input: ICreateStudentDto): Promise<IStudentDto> {
    const student = new Student({
      ...input,
      id: await this.uuidGeneratorAdapter.generate(),
    });

    await this.studentRepository.create(student);

    return {
      id: student.id,
      name: student.name,
      registration: student.registration,
      phoneNumber: student.phoneNumber,
    };
  }
}
