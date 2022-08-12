import ValidationErrors from './validation-error';

export function handleErrors(errors) {
  if (errors.length > 0) {
    throw new ValidationErrors(errors);
  }
}
