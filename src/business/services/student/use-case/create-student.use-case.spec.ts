import studentEntity from '../../../domain/student/entity/student.entity';
import StudentRepository from '../../../domain/student/repository/student.repository';
import ICreateStudentDto from '../../../domain/student/use-case/dto/input/create-student.dto.interface';
import UuidGeneratorAdapter from '../../../../../src/infrastructure/adapter/uuid-generator.adapter';
import CreateStudentUseCase from './create-student.use-case';

class FakeStudentRepository extends StudentRepository {
  protected insert(): Promise<void> {
    return;
  }
  findById(id: string): Promise<studentEntity> {
    return;
  }
}

class FakeUuidGeneratorAdapter extends UuidGeneratorAdapter {
  async generate(): Promise<string> {
    return 'bf7dfc91-c2c5-4b07-abba-36898d4c55b8';
  }
}

describe('Create Student UseCase', () => {
  it('Should be possible create a student', async () => {
    const fakeStudentRepository = new FakeStudentRepository();
    const fakeUuidGenerator = new UuidGeneratorAdapter();

    const createStudentUseCase = new CreateStudentUseCase(
      fakeStudentRepository,
      fakeUuidGenerator,
    );

    const spy = jest.spyOn(fakeStudentRepository, 'create');

    const createStudentDto: ICreateStudentDto = {
      name: 'Oscar',
      registration: 123456,
      phoneNumber: '+55 19 98765-4321',
    };

    const student = await createStudentUseCase.execute(createStudentDto);

    expect(spy).toBeCalledTimes(1);
    expect(student.id).toBeDefined();
    expect(student.name).toBe(createStudentDto.name);
    expect(student.registration).toBe(createStudentDto.registration);
    expect(student.phoneNumber).toBe(createStudentDto.phoneNumber);
  });

  it('Should throw an error when dto is invalid', async () => {
    const fakeStudentRepository = new FakeStudentRepository();
    const fakeUuidGenerator = new UuidGeneratorAdapter();

    const createStudentUseCase = new CreateStudentUseCase(
      fakeStudentRepository,
      fakeUuidGenerator,
    );

    const createStudentDto: ICreateStudentDto = {
      name: '',
      registration: null,
      phoneNumber: '',
    };

    await expect(() =>
      createStudentUseCase.execute(createStudentDto),
    ).rejects.toThrowError();
  });
});
