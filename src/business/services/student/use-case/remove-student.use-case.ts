import StudentRepository from 'src/business/domain/student/repository/student.repository';
import IRemoveStudentUseCase from 'src/business/domain/student/use-case/remove-student.interface';

export default class RemoveStudentUseCase implements IRemoveStudentUseCase {
  constructor(readonly studentRepository: StudentRepository) {}

  async execute(id: string) {
    return await this.studentRepository.delete(id);
  }
}
