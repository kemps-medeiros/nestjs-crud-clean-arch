import Student from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import ListStudentsUseCase from './list-students.use-case';

class FakeStudentRepository extends StudentRepository {
  protected update(student: Student): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
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
  findById(id: string): Promise<Student> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Student[]> {
    return this.students;
  }
}

describe('ListStudentsUseCase', () => {
  it('Should call the StudentRepository findAll mehod', async () => {
    const fakeStudentRepository = new FakeStudentRepository();

    const listStudentsUseCase = new ListStudentsUseCase(fakeStudentRepository);

    const spy = jest.spyOn(fakeStudentRepository, 'findAll');

    await listStudentsUseCase.execute();

    expect(spy).toBeCalledTimes(1);

    spy.mockRestore();
  });

  it('Should return two Students when call execute method of listUseCase', async () => {
    const fakeStudentRepository = new FakeStudentRepository();

    const listStudentUseCase = new ListStudentsUseCase(fakeStudentRepository);

    const students = await listStudentUseCase.execute();

    expect(students.length).toBe(2);
    expect(students).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'bdcaa707-b106-4ba8-ace3-2f1881a93cbb',
          name: 'Neymar',
          registration: 1,
          phoneNumber: '+55 19 98765-4321',
        }),
        expect.objectContaining({
          id: '7b1e2f7c-bce4-4f8e-b62c-536eec0af868',
          name: 'Messi',
          registration: 2,
          phoneNumber: '+55 19 99999-4444',
        }),
      ]),
    );
  });
});
