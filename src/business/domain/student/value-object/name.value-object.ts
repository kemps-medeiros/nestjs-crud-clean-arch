import { Length, validateSync } from 'class-validator';
import { handleErrors } from '../../../common/error/handle-errors';

export default class Name {
  @Length(2, 100)
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    const errors = validateSync(this);
    handleErrors(errors);
  }
}
