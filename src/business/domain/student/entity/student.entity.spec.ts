import Student, { TCreateStudentPayload } from './student.entity';

const createStandardStudentPayload = (): TCreateStudentPayload => {
  return {
    id: 'f2da1f22-db6e-4afa-8125-d0de6a17f47f',
    name: 'João Roberto',
    registration: 123456,
    phoneNumber: '+55 19 99977-0022',
  };
};

describe('Student entity', () => {
  it('Should be possible to instantiate a Student', () => {
    const payloadStudent = createStandardStudentPayload();

    const expectedStudent = {
      id: 'f2da1f22-db6e-4afa-8125-d0de6a17f47f',
      name: 'João Roberto',
      registration: 123456,
      phoneNumber: '+55 19 99977-0022',
    };

    const student = new Student(payloadStudent);

    expect(student.id).toBe(expectedStudent.id);
    expect(student.name).toBe(expectedStudent.name);
    expect(student.registration).toBe(expectedStudent.registration);
    expect(student.phoneNumber).toBe(expectedStudent.phoneNumber);
  });

  it('Should throw an error when tryingg to create a student with invalid identifier', () => {
    const payloadStudent: TCreateStudentPayload = {
      ...createStandardStudentPayload(),
      id: 'asdfg1234',
    };

    expect(() => new Student(payloadStudent)).toThrowError();
  });

  it('Should throw an error when tryingg to create a student with undefined identifier', () => {
    const payloadStudent: TCreateStudentPayload = {
      ...createStandardStudentPayload(),
      id: undefined,
    };

    expect(() => new Student(payloadStudent)).toThrowError();
  });

  it('Should throw an error when tryingg to create a student with invalid name', () => {
    const payloadStudent: TCreateStudentPayload = {
      ...createStandardStudentPayload(),
      name: '',
    };

    expect(() => new Student(payloadStudent)).toThrowError();
  });

  it('Should throw an error when tryingg to create a student with invalid phone number', () => {
    const payloadStudent: TCreateStudentPayload = {
      ...createStandardStudentPayload(),
      phoneNumber: '+017 123456789',
    };

    expect(() => new Student(payloadStudent)).toThrowError();
  });

  it('Should throw an error when tryingg to create a student with invalid registration', () => {
    const payloadStudent: TCreateStudentPayload = {
      ...createStandardStudentPayload(),
      registration: undefined,
    };

    expect(() => new Student(payloadStudent)).toThrowError();
  });

  it('Should set new name for a student already created', () => {
    const payloadStudent = createStandardStudentPayload();

    const student = new Student(payloadStudent);
    student.name = 'Jorge Santos';

    expect(student.name).toBe('Jorge Santos');
  });

  it('Should set new phone number for a student already created', () => {
    const payloadStudent = createStandardStudentPayload();

    const student = new Student(payloadStudent);
    student.phoneNumber = '+55 19 99999-1111';

    expect(student.phoneNumber).toBe('+55 19 99999-1111');
  });

  it('Should set new registration for a student already created', () => {
    const payloadStudent = createStandardStudentPayload();

    const student = new Student(payloadStudent);
    student.registration = 9876;

    expect(student.registration).toBe(9876);
  });
});
