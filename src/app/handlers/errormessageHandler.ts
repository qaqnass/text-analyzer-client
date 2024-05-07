import { FormGroup } from '@angular/forms';
import { ValidationTypes } from '../models/AnalyzerInterfaces';
import { ERRO_MESSAGE_TYPES } from '../models/AnalyzerTypes';

const VALIDATION_TYPE_MESSAGES: ValidationTypes = {
  required: 'Please enter a value for this field.',
  keywordCharReg: 'Please enter only alphabetical characters, [a-zA-z]',
};

export const formMessagesErrorHandler =
  (textAnyzerForm: FormGroup): ERRO_MESSAGE_TYPES => {

    if (!textAnyzerForm) return {};

    let validationKey: string = '',
      errorMessages: ERRO_MESSAGE_TYPES = {};

    const controlKeys = Object.keys(textAnyzerForm.controls);
    controlKeys.forEach(controlKey => {
      validationKey = 'required';
      const control = textAnyzerForm.get(controlKey);
      if (control?.errors) {
        // this condition need to be change according the validation form field.
        if (!control.errors['required']) {
          validationKey = 'keywordCharReg';
        }

        errorMessages[controlKey] = {
          title: controlKey,
          message: (VALIDATION_TYPE_MESSAGES[validationKey as keyof typeof VALIDATION_TYPE_MESSAGES] || ''),
        }
      }
    });

    return errorMessages;
  };


export const requestApiMessageErrorHandler = (message: string | null): string => {
  return message || "Online Service not available!";
}