import { ValidationError } from '@nestjs/common';

export default class ValidationErrors extends Error {
  errors: any[] = [];

  constructor(errors: ValidationError[]) {
    super('Validation Errors');
    for (let i = 0; i < errors.length; i++) {
      this.errors.push(errors[i]);
    }
  }
}
