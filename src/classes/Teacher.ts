import { User } from "./User";

export class Teacher extends User {
  subjects: string[] = [];

  addSubject(subject: string): void {
    this.subjects.push(subject);
  }
}