import { IsDefined, IsInt } from 'class-validator';

export default class Registration {
  @IsInt()
  @IsDefined()
  readonly value: number;

  constructor(value: number) {
    this.value = value;
  }
}
