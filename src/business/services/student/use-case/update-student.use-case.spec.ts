/* eslint-disable @typescript-eslint/no-empty-function */
import IUpdateStudentDto from '../../../domain/student/use-case/dto/input/update-student.dto.interface';
import Student from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import UpdateStudentUseCase from './update-student.use-case';

class FakeStudentRepository extends StudentRepository {
  protected async update(): Promise<void> {}

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
  async findById(id: string): Promise<Student> {
    return this.students.find((student) => student.id === id);
  }
  async findAll(): Promise<Student[]> {
    return this.students;
  }
}

describe('Update Student Use Case', () => {
  it('Should edit a student correctly', async () => {
    const fakeRepository = new FakeStudentRepository();

    const updateUseCase = new UpdateStudentUseCase(fakeRepository);

    const studentRepositoryEditMethodSpy = jest.spyOn(fakeRepository, 'edit');

    const updateDto: IUpdateStudentDto = {
      id: '7b1e2f7c-bce4-4f8e-b62c-536eec0af868',
      name: 'Lionel Messi',
      registration: 10,
      phoneNumber: '+55 19 99999-1010',
    };

    const updatedStudent = await updateUseCase.execute(updateDto);

    expect(updatedStudent.name).toBe(updateDto.name);
    expect(updatedStudent.registration).toBe(updateDto.registration);
    expect(updatedStudent.phoneNumber).toBe(updateDto.phoneNumber);
  });

  it('Should throw an error when dont find student', async () => {
    const fakeRepository = new FakeStudentRepository();

    const updateUseCase = new UpdateStudentUseCase(fakeRepository);

    const studentRepositoryEditMethodSpy = jest.spyOn(fakeRepository, 'edit');

    const updateDto: IUpdateStudentDto = {
      id: 'asdfg',
      name: 'Lionel Messi',
      registration: 10,
      phoneNumber: '+55 19 99999-1010',
    };

    const promise = updateUseCase.execute(updateDto);

    try {
      await promise;
    } catch (error) {
      expect(error).toStrictEqual(new Error('Student Not Found'));
    }
  });
});
