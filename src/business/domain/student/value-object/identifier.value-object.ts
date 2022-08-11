import { IsUUID } from 'class-validator';

export default class Identifier {
  @IsUUID(4)
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}
