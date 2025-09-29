import { EmailValidator } from '../src/emailValidator';

describe('EmailValidator', () => {
  describe('validate', () => {
    test('should return valid result for correct email format', () => {
      const result = EmailValidator.validate('test@example.com');
      expect(result.isValid).toBe(true);
      expect(result.message).toBe('Valid email address');
    });

    test('should return invalid result for email without @', () => {
      const result = EmailValidator.validate('testexample.com');
      expect(result.isValid).toBe(false);
      expect(result.message).toBe('Invalid email format');
    });

    test('should return invalid result for email without domain', () => {
      const result = EmailValidator.validate('test@');
      expect(result.isValid).toBe(false);
      expect(result.message).toBe('Invalid email format');
    });

    test('should return invalid result for empty string', () => {
      const result = EmailValidator.validate('');
      expect(result.isValid).toBe(false);
      expect(result.message).toBe('Email is required');
    });

    test('should return invalid result for whitespace only', () => {
      const result = EmailValidator.validate('   ');
      expect(result.isValid).toBe(false);
      expect(result.message).toBe('Email is required');
    });

    test('should handle email with spaces and trim them', () => {
      const result = EmailValidator.validate('  test@example.com  ');
      expect(result.isValid).toBe(true);
      expect(result.message).toBe('Valid email address');
    });
  });

  describe('isValidEmail', () => {
    test('should return true for valid email', () => {
      expect(EmailValidator.isValidEmail('user@domain.co')).toBe(true);
    });

    test('should return false for invalid email', () => {
      expect(EmailValidator.isValidEmail('invalid-email')).toBe(false);
    });
  });
});