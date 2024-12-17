import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Course } from "./Course";

export class CourseManager {
  private users: (Student | Teacher)[] = [];
  private courses: Course[] = [];

  addUser(user: Student | Teacher): void {
    this.users.push(user);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  assignTeacherToCourse(courseId: number, teacherId: number): void {
    const course = this.courses.find((c) => c.id === courseId);
    const teacher = this.users.find((u) => u.id === teacherId && u instanceof Teacher);

    if (course && teacher instanceof Teacher) {
      course.teacher = teacher;
    } else {
      throw new Error("Invalid course or teacher ID");
    }
  }

  enrollStudentToCourse(courseId: number, studentId: number): void {
    const course = this.courses.find((c) => c.id === courseId);
    const student = this.users.find((u) => u.id === studentId && u instanceof Student);

    if (course && student instanceof Student) {
      course.addStudent(student);
    } else {
      throw new Error("Invalid course or student ID");
    }
  }

  static generateReport(manager: CourseManager): string {
    return manager.courses
      .map((course) => {
        const teacherName = course.teacher ? course.teacher.name : "No teacher assigned";
        const students = course.listStudents() || "No students enrolled";
        return `Course: ${course.name}, Teacher: ${teacherName}, Students: ${students}`;
      })
      .join("\n");
  }
}