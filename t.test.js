import { capitalize } from './capitalize.js';
import { reverseString } from './reverseString.js';
import { caesarCipher } from './caesarCipher.js';
import { analyzeArray } from './analyzeArray.js';
import calculator from './calculator.js';
describe('capitalize', () => {
  test('normalstring', () => {
    expect(capitalize('team')).toBe('Team');
  });
  test('nostring', () => {
    expect(capitalize('')).toBe('');
  });
  test('randomstring', () => {
    expect(capitalize('heLlO')).toBe('Hello');
  });
});

describe('reverseString', () => {
  test('normalstring', () => {
    expect(reverseString('team')).toBe('maet');
  });
  test('nostring', () => {
    expect(reverseString('')).toBe('');
  });
  test('randomstring', () => {
    expect(reverseString('aSfe')).toBe('efSa');
  });
});
describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });
  test('subtract', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test('multiply', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
  test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
describe('caesarCipher', () => {
  test('normalstring', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('mixstring', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('punctuationstring', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
describe('analyzeArray', () => {
  test('average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  });
  test('min', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  });
  test('max', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  });
  test('length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  });
});
