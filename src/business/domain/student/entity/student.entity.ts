import Identifier from '../value-object/identifier.value-object';
import Name from '../value-object/name.value-object';
import PhoneNumber from '../value-object/phone-number.value-object';
import Registration from '../value-object/registration.value-objects';

export type TCreateStudentPayload = {
  id: string;
  name: string;
  registration: number;
  phoneNumber: string;
};

export default class Student {
  private _id: Identifier;
  private _name: Name;
  private _registration: Registration;
  private _phoneNumber: PhoneNumber;

  constructor(payload: TCreateStudentPayload) {
    this._id = new Identifier(payload.id);
    this._name = new Name(payload.name);
    this._registration = new Registration(payload.registration);
    this._phoneNumber = new PhoneNumber(payload.phoneNumber);
  }

  get id() {
    return this._id.value;
  }

  get name() {
    return this._name.value;
  }

  set name(value: string) {
    this._name = new Name(value);
  }

  get registration() {
    return this._registration.value;
  }
  set registration(value: number) {
    this._registration = new Registration(value);
  }

  get phoneNumber() {
    return this._phoneNumber.value;
  }
  set phoneNumber(value: string) {
    this._phoneNumber = new PhoneNumber(value);
  }
}
