export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export class EmailValidator {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  static validate(email: string): ValidationResult {
    if (!email || email.trim() === '') {
      return {
        isValid: false,
        message: 'Email is required'
      };
    }

    const trimmedEmail = email.trim();
    const isValid = this.EMAIL_REGEX.test(trimmedEmail);

    return {
      isValid,
      message: isValid ? 'Valid email address' : 'Invalid email format'
    };
  }

  static isValidEmail(email: string): boolean {
    return this.validate(email).isValid;
  }
}