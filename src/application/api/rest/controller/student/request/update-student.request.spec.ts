import UpdateStudentRequest from './update-student.request';

describe('create student request', () => {
  it('Should be possible create a student request', () => {
    const createStudentRequest = new UpdateStudentRequest();
    createStudentRequest.name = 'Lionel';
    createStudentRequest.registration = 10;
    createStudentRequest.phoneNumber = '+55 19 99999-9999';

    expect(createStudentRequest.name).toBe('Lionel');
    expect(createStudentRequest.registration).toBe(10);
    expect(createStudentRequest.phoneNumber).toBe('+55 19 99999-9999');
  });
});
