import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/application/dependecy-inversion/app.module';

describe('Student Controller E2E Test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a new student', () => {
    return request(app.getHttpServer())
      .post('/student')
      .send({
        name: 'Teste e2e',
        registration: 1,
        phoneNumber: '+55 19 91111-1111',
      })
      .expect(201);
  });
});
