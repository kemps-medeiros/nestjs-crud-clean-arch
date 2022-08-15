import studentEntity from 'src/business/domain/student/entity/student.entity';
import StudentRepository from 'src/business/domain/student/repository/student.repository';
import { DataSource, Repository } from 'typeorm';
import StudentMapper from '../entity/mapper/student.mapper';
import StudentTypeOrmEntity from '../entity/student.typeorm.entity';

export default class StudentTypeOrmRepository extends StudentRepository {
  private readonly studentTypeOrmRepository: Repository<StudentTypeOrmEntity>;

  constructor(private dataSource: DataSource) {
    super();

    this.studentTypeOrmRepository =
      this.dataSource.getRepository(StudentTypeOrmEntity);
  }

  protected async insert(student: studentEntity): Promise<void> {
    const studentTypeOrmEntity: StudentTypeOrmEntity =
      StudentMapper.toTypeOrm(student);

    await this.studentTypeOrmRepository.insert(studentTypeOrmEntity);
  }

  async findById(id: string): Promise<studentEntity> {
    const ormEntity: StudentTypeOrmEntity =
      await this.studentTypeOrmRepository.findOne({ where: { id } });

    if (!ormEntity) {
      return null;
    }

    return StudentMapper.toDomain(ormEntity);
  }
}
