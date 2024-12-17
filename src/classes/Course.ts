import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { BaseModel } from "./BaseModel";

export class Course extends BaseModel {
  private static idCounter = 1;

  readonly id: number;
  name: string;
  teacher: Teacher | null = null;
  private students: Student[] = [];

  constructor(name: string) {
    super();
    this.id = Course.idCounter++;
    this.name = name;
  }

  addStudent(student: Student): void {
    this.validateStudent(student);
    this.students.push(student);
  }

  removeStudent(studentId: number): void {
    this.students = this.students.filter((s) => s.id !== studentId);
  }

  listStudents(): string {
    return this.students.map((s) => s.info).join(", ");
  }

  validate(): void {
    if (!this.name) {
      throw new Error("Course name is required");
    }
  }

  private validateStudent(student: Student): void {
    if (!(student instanceof Student)) {
      throw new Error("Only instances of Student can be added to the course");
    }
  }
}