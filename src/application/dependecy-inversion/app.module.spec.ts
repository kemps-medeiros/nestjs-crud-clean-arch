import { Test } from '@nestjs/testing';
import DatabaseModule from './modules/database.module';
import UuidGeneratorModule from './modules/uuid-generator.module';
import { StudentModule } from './student.module';

describe('Student Module', () => {
  it('Should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [UuidGeneratorModule, DatabaseModule, StudentModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(UuidGeneratorModule)).toBeInstanceOf(UuidGeneratorModule);
    expect(module.get(DatabaseModule)).toBeInstanceOf(DatabaseModule);
    expect(module.get(StudentModule)).toBeInstanceOf(StudentModule);
  });
});
