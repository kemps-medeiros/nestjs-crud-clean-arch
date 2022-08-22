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

  //   it.only('should return a 500 when invalid parameters', () => {
  //     return request(app.getHttpServer())
  //       .post('/student/')
  //       .send({
  //         name: 'a',
  //         registration: 1,
  //         phoneNumber: '4',
  //       })
  //       .expect(400);
  //   });

  //   it('should return a 400 when invalid name', () => {
  //     return request(app.getHttpServer())
  //       .post('/student')
  //       .send({
  //         name: 'R',
  //         registration: 1,
  //         phoneNumber: '+55 19 91111-1111',
  //       })
  //       .expect(400);
  //   });
});
