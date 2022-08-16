import Student from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import GetStudentByIdUseCase from './get-student-by-id.use-case';

class FakeStudentRepository extends StudentRepository {
  students: Student[] = [
    new Student({
      id: 'bdcaa707-b106-4ba8-ace3-2f1881a93cbb',
      name: 'Neymar',
      registration: 1,
      phoneNumber: '+55 19 98765-4321',
    }),
    new Student({
      id: '7b1e2f7c-bce4-4f8e-b62c-536eec0af868',
      name: 'Messi',
      registration: 2,
      phoneNumber: '+55 19 99999-4444',
    }),
  ];

  protected insert(student: Student): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<Student> {
    const student = this.students.find((student) => student.id === id);

    return student;
  }
  async findAll(): Promise<Student[]> {
    return this.students;
  }
}

describe('ListStudentsUseCase', () => {
  it('Should call the StudentRepository findById mehod', async () => {
    const fakeStudentRepository = new FakeStudentRepository();

    const getStudentByIdUseCase = new GetStudentByIdUseCase(
      fakeStudentRepository,
    );

    const spy = jest.spyOn(fakeStudentRepository, 'findById');

    await getStudentByIdUseCase.execute('7b1e2f7c-bce4-4f8e-b62c-536eec0af868');

    expect(spy).toBeCalledTimes(1);

    spy.mockRestore();
  });

  it('Should return the student with the past id ', async () => {
    const fakeStudentRepository = new FakeStudentRepository();

    const getStudentByIdUseCase = new GetStudentByIdUseCase(
      fakeStudentRepository,
    );

    const student = await getStudentByIdUseCase.execute(
      '7b1e2f7c-bce4-4f8e-b62c-536eec0af868',
    );

    expect(student.name).toBe('Messi');
    expect(student.registration).toBe(2);
    expect(student.phoneNumber).toBe('+55 19 99999-4444');
  });
});
