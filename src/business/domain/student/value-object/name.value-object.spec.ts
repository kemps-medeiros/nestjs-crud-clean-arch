import Name from './name.value-object';

describe('Name value-object', () => {
  it('Should be possible to instantiate an Name', () => {
    const name = new Name('João Roberto');

    expect(name.value).toBe('João Roberto');
  });

  it('Should throw an error when trying to create a Name with null value', () => {
    expect(() => new Name(null)).toThrowError();
  });

  it('Should throw an error when trying to create a Name with invalid value length', () => {
    expect(() => new Name('')).toThrowError();
    expect(() => new Name('a'.repeat(101))).toThrowError();
  });
});
