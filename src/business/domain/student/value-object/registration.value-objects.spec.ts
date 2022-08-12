import Registration from './registration.value-objects';

describe('Registration value-object', () => {
  it('Should be possible to instantiate a Registration', () => {
    const registration = new Registration(123456);

    expect(registration.value).toBe(123456);
  });

  it('Should throw an error when trying to create a Registration with a null value', () => {
    expect(() => new Registration(null)).toThrowError();
  });
});
