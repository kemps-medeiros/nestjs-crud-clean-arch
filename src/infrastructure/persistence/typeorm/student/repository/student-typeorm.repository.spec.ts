/* eslint-disable @typescript-eslint/no-empty-function */
import Student from '../../../../../business/domain/student/entity/student.entity';
import { DataSource, Repository } from 'typeorm';
import StudentMapper from '../entity/mapper/student.mapper';
import StudentTypeOrmEntity from '../entity/student.typeorm.entity';
import StudentTypeOrmRepository from './student-typeorm.repository';

describe('Student TypeOrm Repository', () => {
  let dataSource: DataSource;
  let studentRepository: StudentTypeOrmRepository;
  let studentTypeOrmRepo: Repository<StudentTypeOrmEntity>;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      entities: ['**/*.entity{.ts,.js}'],
      database: 'student-database-test',
    });

    await dataSource.initialize();

    await dataSource.synchronize(true);

    studentRepository = new StudentTypeOrmRepository(dataSource);
    studentTypeOrmRepo = dataSource.getRepository(StudentTypeOrmEntity);
  });

  describe('Create Student', () => {
    it('Should create a student with valid parameters', async () => {
      const student = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });
      await studentRepository.create(student);
      const studentFound = await studentTypeOrmRepo.findOne({
        where: { id: '49d66b66-21f8-46e2-87da-82157ee135be' },
      });
      expect(student).toStrictEqual(StudentMapper.toDomain(studentFound));
    });
  });

  describe('List Students', () => {
    it('Should retrieve all students', async () => {
      const student1 = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });
      const student2 = new Student({
        id: 'e2cf1f95-d546-4c2f-8064-00d649c81b78',
        name: 'Marcos Goleiro',
        registration: 12,
        phoneNumber: '+55 19 91212-1212',
      });

      await studentRepository.create(student1);
      await studentRepository.create(student2);

      const typeOrmStudentsfound = await studentRepository.findAll();

      expect(typeOrmStudentsfound).toStrictEqual(
        expect.arrayContaining([student1, student2]),
      );
    });

    it('Should retrieve only one student', async () => {
      const student1 = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });
      const student2 = new Student({
        id: 'e2cf1f95-d546-4c2f-8064-00d649c81b78',
        name: 'Marcos Goleiro',
        registration: 12,
        phoneNumber: '+55 19 91212-1212',
      });

      await studentRepository.create(student1);
      await studentRepository.create(student2);

      const typeOrmStudentfound = await studentRepository.findById(
        '49d66b66-21f8-46e2-87da-82157ee135be',
      );

      expect(typeOrmStudentfound).toStrictEqual(
        expect.objectContaining(StudentMapper.toDomain(student1)),
      );
    });

    it('Should throw an error when dont find student', async () => {
      const student1 = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });
      const student2 = new Student({
        id: 'e2cf1f95-d546-4c2f-8064-00d649c81b78',
        name: 'Marcos Goleiro',
        registration: 12,
        phoneNumber: '+55 19 91212-1212',
      });

      await studentRepository.create(student1);
      await studentRepository.create(student2);

      const typeOrmStudentfound = studentRepository.findById('asdfg');

      try {
        await typeOrmStudentfound;
      } catch (error) {
        expect(error).toStrictEqual(new Error('Student Not Found'));
      }
    });
  });

  describe('Edit Student', () => {
    it('should edit a student correctly', async () => {
      const student = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });

      await studentRepository.create(student);

      const studentChanges = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Mito Ceni',
        registration: 10,
        phoneNumber: '+55 19 91010-1010',
      });

      await studentRepository.edit(studentChanges);

      const studentEdited = await studentTypeOrmRepo.findOne({
        where: { id: '49d66b66-21f8-46e2-87da-82157ee135be' },
      });

      expect(studentChanges).toStrictEqual(
        StudentMapper.toDomain(studentEdited),
      );
    });
  });

  describe('Delete Student', () => {
    it('should delete a student correctly', async () => {
      const student = new Student({
        id: '49d66b66-21f8-46e2-87da-82157ee135be',
        name: 'Rogério Ceni',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      });

      await studentRepository.create(student);

      const deleteResult = await studentRepository.delete(
        '49d66b66-21f8-46e2-87da-82157ee135be',
      );

      expect(deleteResult).toStrictEqual(
        expect.objectContaining({ raw: [], affected: 1 }),
      );
    });
  });
});
