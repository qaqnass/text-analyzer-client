import {
  AnalyzeKeywordsInterface,
  LetterInterface,
} from '../models/AnalyzerInterfaces';
import { LETTER_FREQUENCY_TYPE } from '../models/AnalyzerTypes';

export const letterFrequencyFormatHandler = (
  lettersFrequency: LETTER_FREQUENCY_TYPE = {}, keyword: string
): AnalyzeKeywordsInterface => {
  const letterFrequencyKeys = Object.keys(lettersFrequency);

  let letters: LetterInterface[] = [],
    totalFrequency: number = 0
  for (const letter of letterFrequencyKeys) {
    const frequency = lettersFrequency[letter];
    totalFrequency += frequency;
    letters.push({ letter: letter, frequency });
  }
  return {
    keyIndex: 0,
    letters,
    totalFrequency,
    keyword
  };
};
