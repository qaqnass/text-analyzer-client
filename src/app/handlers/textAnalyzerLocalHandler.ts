import { AnalyzeInterface, AnalyzeKeywordsInterface } from '../models/AnalyzerInterfaces';
import { LETTER_FREQUENCY_TYPE, INCLUDE_EXCLUDE } from '../models/AnalyzerTypes';
import { letterFrequencyFormatHandler } from './letterFrequencyFormatHandler';

export const calculateLettersFrequencyHandler = (
  formValue: AnalyzeInterface,
  chars: string,
  includeExclude: INCLUDE_EXCLUDE = 'include'
): AnalyzeKeywordsInterface => {
  const str: string = formValue.text.toLowerCase();
  chars = chars.toLowerCase();

  let letterFrequency: LETTER_FREQUENCY_TYPE = {};
  let excludeFrequency: LETTER_FREQUENCY_TYPE = {};

  for (let char of chars.split('')) {
    letterFrequency[char.toLocaleLowerCase()] = 0;
  }

  for (let char of str.split('')) {
    if (/[a-z ]/.test(char)) {
      if (letterFrequency.hasOwnProperty(char) && includeExclude === 'include') {
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
      } if (!letterFrequency.hasOwnProperty(char) && includeExclude === 'exclude') {
        excludeFrequency[char] = (excludeFrequency[char] || 0) + 1;
      }
    }
  }

  return letterFrequencyFormatHandler(
    includeExclude === 'include' ? letterFrequency : excludeFrequency, formValue.toBe);
};
