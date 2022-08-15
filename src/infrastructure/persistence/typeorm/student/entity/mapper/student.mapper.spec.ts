import Student, {
  TCreateStudentPayload,
} from '../../../../../../business/domain/student/entity/student.entity';
import StudentTypeOrmEntity from '../student.typeorm.entity';
import StudentMapper from './student.mapper';

const createStandardStudentPayload = (): TCreateStudentPayload => {
  return {
    id: 'd0f15398-c722-4cc2-8eea-e711fb56a142',
    name: 'Fulano de Tal',
    registration: 4567,
    phoneNumber: '+55 19 98756-4321',
  };
};

describe('Student typeorm mapper', () => {
  it('Should convert domain to type orm entity', () => {
    const payload = createStandardStudentPayload();

    const businessStudent = new Student(payload);

    const typeOrmStudent = StudentMapper.toTypeOrm(businessStudent);

    expect(businessStudent.id).toBe(typeOrmStudent.id);
    expect(businessStudent.name).toBe(typeOrmStudent.name);
    expect(businessStudent.registration).toBe(typeOrmStudent.registration);
    expect(businessStudent.phoneNumber).toBe(typeOrmStudent.phoneNumber);
  });

  it('Should convert type orm entity to domain entity', () => {
    const payload = createStandardStudentPayload();

    const typeOrmStudent = new StudentTypeOrmEntity();
    typeOrmStudent.id = payload.id;
    typeOrmStudent.name = payload.name;
    typeOrmStudent.registration = payload.registration;
    typeOrmStudent.phoneNumber = payload.phoneNumber;

    const businessStudent = StudentMapper.toDomain(typeOrmStudent);

    expect(typeOrmStudent.id).toBe(businessStudent.id);
    expect(typeOrmStudent.name).toBe(businessStudent.name);
    expect(typeOrmStudent.registration).toBe(businessStudent.registration);
    expect(typeOrmStudent.phoneNumber).toBe(businessStudent.phoneNumber);
  });
});
