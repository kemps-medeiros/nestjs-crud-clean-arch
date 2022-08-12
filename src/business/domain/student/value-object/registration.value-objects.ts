import { IsInt, validateSync } from 'class-validator';
import { handleErrors } from '../../../common/error/handle-errors';

export default class Registration {
  @IsInt()
  readonly value: number;

  constructor(value: number) {
    this.value = value;
    const errors = validateSync(this);
    handleErrors(errors);
  }
}
