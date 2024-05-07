
export type ERRO_MESSAGE_TYPES = {
  [key: string]: ERRO_MESSAGE_TYPE,
}

export type ERRO_MESSAGE_TYPE = {
  title: string,
  message: string
};

export type INCLUDE_EXCLUDE = 'include' | 'exclude';

export type LETTER_FREQUENCY_TYPE = { [key: string]: number };
