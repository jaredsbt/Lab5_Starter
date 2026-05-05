import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid phone 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone 2', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone 1', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('invalid phone 2', () => {
    expect(isPhoneNumber('12-34-567')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email 1', () => {
    expect(isEmail('test@gmail.com')).toBe(true);
  });

  test('valid email 2', () => {
    expect(isEmail('user_123@domain.com')).toBe(true);
  });

  test('invalid email 1', () => {
    expect(isEmail('notanemail')).toBe(false);
  });

  test('invalid email 2', () => {
    expect(isEmail('user@domain')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid password 1', () => {
    expect(isStrongPassword('a1234')).toBe(true);
  });

  test('valid password 2', () => {
    expect(isStrongPassword('Zabc123')).toBe(true);
  });

  test('invalid password 1', () => {
    expect(isStrongPassword('12345')).toBe(false);
  });

  test('invalid password 2', () => {
    expect(isStrongPassword('a!@#1234')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date 1', () => {
    expect(isDate('1/1/2024')).toBe(true);
  });

  test('valid date 2', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });

  test('invalid date 1', () => {
    expect(isDate('2024/01/01')).toBe(false);
  });

  test('invalid date 2', () => {
    expect(isDate('1-1-2024')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex 1', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('valid hex 2', () => {
    expect(isHexColor('#ffcc00')).toBe(true);
  });

  test('invalid hex 1', () => {
    expect(isHexColor('ggg')).toBe(false);
  });

  test('invalid hex 2', () => {
    expect(isHexColor('#12345g')).toBe(false);
  });
});
