import { IsDefined, IsPhoneNumber } from 'class-validator';

export default class PhoneNumber {
  @IsDefined()
  @IsPhoneNumber()
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}
