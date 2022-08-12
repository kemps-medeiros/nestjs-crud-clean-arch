import Student from '../entity/student.entity';

export default abstract class StudentRepository {
  async create(student: Student): Promise<void> {
    const existedStudent = await this.findById(student.id);

    if (existedStudent) {
      throw new Error('Student already exists on this database');
    }

    await this.insert(student);
  }

  protected abstract insert(student: Student): Promise<void>;

  abstract findById(id: string): Promise<Student>;
}
