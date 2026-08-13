import { useEffect, useState } from 'react';
const DECODE_CHARS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ' ',
  '_',
  '@',
  '#',
  '[',
  ']',
  '*',
  '!',
  '?',
  '$',
  '%',
  '&',
  '+',
  '=',
  '/',
  '<',
  '>',
];
export const useDecodeText = (textDefault: string): string => {
  const [text, setText] = useState('');
  useEffect(() => {
    let iteration = 0;
    const int = setInterval(() => {
      const decodeText = textDefault
        .split('')
        .map((char, idx) => {
          if (char === ' ') return ' ';
          if (iteration < idx) {
            return DECODE_CHARS[
              Math.floor(Math.random() * DECODE_CHARS.length)
            ];
          }
          return textDefault[idx];
        })
        .join('');
      setText(decodeText);
      if (iteration >= textDefault.length) {
        clearInterval(int);
      }
      iteration += 1 / 3;
    }, 40);

    return () => clearInterval(int);
  }, [DECODE_CHARS]);
  return text;
};
