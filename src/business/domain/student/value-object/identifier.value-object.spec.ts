import Identifier from './identifier.value-object';

describe('identifier value-object', () => {
  it('should be possible to instance a identifier', () => {
    expect(new Identifier('844ee0f9-223e-4231-9739-24476ce11596').value).toBe(
      '844ee0f9-223e-4231-9739-24476ce11596',
    );
  });

  it('Should throw an error when Identifier value is invalid', () => {
    expect(() => new Identifier('asdfg')).toThrowError();
  });

  it('Should throw an error when Identifier value is empty', () => {
    expect(() => new Identifier('')).toThrowError();
  });

  it('Should throw an error when Identifier value is null', () => {
    expect(() => new Identifier(null)).toThrowError();
  });
});
