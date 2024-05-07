
export interface AnalyzeInterface {
  toBe: string;
  text: string;
};

export interface AnalyzeKeywordsInterface {
  keyIndex?: number;
  keyword: string;
  totalFrequency: number;
  letters: LetterInterface[];
};

export interface LetterInterface {
  frequency: number;
  letter: string;
};

export interface LettersFrequencyFormatInterface {
  totalFrequency: number;
  letters: LetterInterface[];
};

export interface ValidationTypes {
  required: string,
  keywordCharReg: string,
  keywordLimit?: string,
};

export interface PostParamInterface {
  text: string,
  toBe: string,
  label: string,
  letters: string
};
