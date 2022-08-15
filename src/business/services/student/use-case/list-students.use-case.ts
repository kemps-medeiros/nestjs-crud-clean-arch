import StudentRepository from '../../../domain/student/repository/student.repository';
import studentDtoInterface from '../../../domain/student/use-case/dto/output/student.dto.interface';
import IListStudentsUseCase from 'src/business/domain/student/use-case/list-students.interface';

export default class ListStudentsUseCase implements IListStudentsUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(): Promise<studentDtoInterface[]> {
    const students = await this.studentRepository.findAll();

    return students.map((student) => ({
      id: student.id,
      name: student.name,
      registration: student.registration,
      phoneNumber: student.phoneNumber,
    }));
  }
}
