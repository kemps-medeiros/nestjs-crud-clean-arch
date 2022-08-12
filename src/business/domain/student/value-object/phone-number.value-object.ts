import { IsPhoneNumber, validateSync } from 'class-validator';
import { handleErrors } from '../../../common/error/handle-errors';

export default class PhoneNumber {
  @IsPhoneNumber('BR')
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    const errors = validateSync(this);
    handleErrors(errors);
  }
}
