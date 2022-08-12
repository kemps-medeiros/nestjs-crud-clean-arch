import PhoneNumber from './phone-number.value-object';

describe('Phone Number value object', () => {
  it('Should be possible to instantiate a Phone Number', () => {
    const phoneNumber = new PhoneNumber('+55 11 91431-4567');

    expect(phoneNumber.value).toBe('+55 11 91431-4567');
  });

  test('Should throw an error when trying to create a phone number with null value', () => {
    expect(() => new PhoneNumber(null)).toThrowError();
  });

  test('Should throw an error when trying to create an invalid phone number', () => {
    expect(() => new PhoneNumber('123456')).toThrowError();
    expect(() => new PhoneNumber('NotNumber')).toThrowError();
    expect(() => new PhoneNumber('+017 123456789')).toThrowError();
    expect(() => new PhoneNumber('+550123456789')).toThrowError();
  });
});
