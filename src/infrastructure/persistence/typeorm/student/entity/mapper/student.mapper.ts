import Student from '../../../../../../business/domain/student/entity/student.entity';
import StudentTypeOrmEntity from '../student.typeorm.entity';

export default class StudentMapper {
  public static toDomain(ormEntity: StudentTypeOrmEntity): Student {
    const student = new Student({
      id: ormEntity.id,
      name: ormEntity.name,
      registration: ormEntity.registration,
      phoneNumber: ormEntity.phoneNumber,
    });

    return student;
  }

  public static toTypeOrm(student: Student): StudentTypeOrmEntity {
    const studentTypeOrm = new StudentTypeOrmEntity();

    studentTypeOrm.id = student.id;
    studentTypeOrm.name = student.name;
    studentTypeOrm.registration = student.registration;
    studentTypeOrm.phoneNumber = student.phoneNumber;

    return studentTypeOrm;
  }
}
