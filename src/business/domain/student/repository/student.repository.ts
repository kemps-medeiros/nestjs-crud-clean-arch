import { DeleteResult } from 'typeorm';
import Student from '../entity/student.entity';

export default abstract class StudentRepository {
  async create(student: Student): Promise<void> {
    await this.insert(student);
  }

  async edit(student: Student): Promise<void> {
    await this.update(student);
  }

  protected abstract update(student: Student): Promise<void>;

  protected abstract insert(student: Student): Promise<void>;

  abstract findById(id: string): Promise<Student>;

  abstract findAll(): Promise<Student[]>;

  abstract delete(id: string): Promise<any>;
}
