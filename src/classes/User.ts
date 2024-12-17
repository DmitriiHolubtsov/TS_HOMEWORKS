import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  private static idCounter = 1;

  readonly id: number;
  name: string;
  email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    super();
    this.validateEmail(email);
    this.id = User.idCounter++;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  set setEmail(newEmail: string) {
    this.validateEmail(newEmail);
    this.email = newEmail;
  }

  changePassword(newPassword: string): void {
    this.password = newPassword;
  }

  get info(): string {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }

  validate(): void {
    if (!this.name || !this.email) {
      throw new Error("Name and email are required fields");
    }
  }

  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
  }
}