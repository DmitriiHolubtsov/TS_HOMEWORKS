import { User } from "./User";

export class Student extends User {
  courses: string[] = [];

  enroll(course: string): void {
    this.courses.push(course);
  }
}