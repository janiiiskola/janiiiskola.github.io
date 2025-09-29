import { EmailValidator } from './emailValidator.js';

class EmailValidatorApp {
  private emailInput: HTMLInputElement;
  private validationMessage: HTMLElement;

  constructor() {
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.validationMessage = document.getElementById('validation-message') as HTMLElement;

    if (!this.emailInput || !this.validationMessage) {
      throw new Error('Required DOM elements not found');
    }

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    this.emailInput.addEventListener('input', this.handleEmailInput.bind(this));
    this.emailInput.addEventListener('blur', this.handleEmailInput.bind(this));
  }

  private handleEmailInput(): void {
    const email = this.emailInput.value;
    const result = EmailValidator.validate(email);

    this.updateUI(result.isValid, result.message);
  }

  private updateUI(isValid: boolean, message: string): void {
    this.emailInput.className = isValid ? 'valid' : 'invalid';
    this.validationMessage.textContent = message;
    this.validationMessage.className = `validation-message ${isValid ? 'valid' : 'invalid'}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new EmailValidatorApp();
});