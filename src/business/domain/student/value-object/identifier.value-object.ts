import { IsUUID, validateSync } from 'class-validator';
import { handleErrors } from '../../../common/error/handle-errors';

export default class Identifier {
  @IsUUID(4)
  value: string;

  constructor(value: string) {
    this.value = value;
    const errors = validateSync(this);
    handleErrors(errors);
  }
}
