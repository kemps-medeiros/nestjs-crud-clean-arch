import { IsDefined, Length } from 'class-validator';

export default class Name {
  @Length(2, 100)
  @IsDefined()
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}
