import studentEntity from '../../../../../business/domain/student/entity/student.entity';
import StudentRepository from '../../../../../business/domain/student/repository/student.repository';
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
      throw new Error('Student Not Found');
    }

    return StudentMapper.toDomain(ormEntity);
  }

  async findAll(): Promise<studentEntity[]> {
    const studentsTypeOrm = await this.studentTypeOrmRepository.find();

    return studentsTypeOrm.map((ormEntity) =>
      StudentMapper.toDomain(ormEntity),
    );
  }

  protected async update(student: studentEntity): Promise<void> {
    const ormEntity = StudentMapper.toTypeOrm(student);

    await this.studentTypeOrmRepository.update({ id: ormEntity.id }, ormEntity);
  }

  async delete(id: string): Promise<any> {
    return await this.studentTypeOrmRepository.delete(id);
  }
}
