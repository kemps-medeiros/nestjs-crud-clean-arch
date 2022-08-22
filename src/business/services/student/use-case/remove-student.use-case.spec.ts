/* eslint-disable @typescript-eslint/no-empty-function */
import Student from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import RemoveStudentUseCase from './remove-student.use-case';

class FakeStudentRepository extends StudentRepository {
  protected async update(): Promise<void> {}

  async delete(id: string): Promise<any> {}

  students: Student[] = [
    new Student({
      id: 'bdcaa707-b106-4ba8-ace3-2f1881a93cbb',
      name: 'Neymar',
      registration: 1,
      phoneNumber: '+55 19 98765-4321',
    }),
  ];

  protected insert(student: Student): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<Student> {
    return this.students.find((student) => student.id === id);
  }
  async findAll(): Promise<Student[]> {
    return this.students;
  }
}

it('Should delete a student correctly', async () => {
  const fakeRepository = new FakeStudentRepository();

  const removeUseCase = new RemoveStudentUseCase(fakeRepository);

  const removedStudent = removeUseCase.execute(
    'bdcaa707-b106-4ba8-ace3-2f1881a93cbb',
  );

  try {
    expect(await removedStudent).not.toThrowError();
  } catch (error) {}
});
