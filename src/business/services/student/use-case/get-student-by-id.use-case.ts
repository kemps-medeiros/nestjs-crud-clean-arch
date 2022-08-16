import StudentRepository from 'src/business/domain/student/repository/student.repository';
import IGetStudentByIdUseCase from 'src/business/domain/student/use-case/get-student-by-id.interface';

export default class GetStudentByIdUseCase implements IGetStudentByIdUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(id: string) {
    const student = await this.studentRepository.findById(id);

    return {
      id: student.id,
      name: student.name,
      registration: student.registration,
      phoneNumber: student.phoneNumber,
    };
  }
}
