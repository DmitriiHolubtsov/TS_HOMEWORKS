import { CourseManager } from "./classes/CourseManager";
import { Teacher } from "./classes/Teacher";
import { Student } from "./classes/Student";
import { Course } from "./classes/Course";

// Initialization
const manager = new CourseManager();

// Creating Teachers
const teacher1 = new Teacher("Alice", "alice@mail.com", "password123");
const teacher2 = new Teacher("Bob", "bob@mail.com", "password456");

// Creating students
const student1 = new Student("Charlie", "charlie@mail.com", "pass1");
const student2 = new Student("Diana", "diana@mail.com", "pass2");

// Add users
manager.addUser(teacher1);
manager.addUser(teacher2);
manager.addUser(student1);
manager.addUser(student2);

// Create Curses
const course1 = new Course("Math");
const course2 = new Course("Physics");

// Add Curses
manager.addCourse(course1);
manager.addCourse(course2);

// Add Teachers
manager.assignTeacherToCourse(course1.id, teacher1.id);
manager.assignTeacherToCourse(course2.id, teacher2.id);

// Add Students to curses
manager.enrollStudentToCourse(course1.id, student1.id);
manager.enrollStudentToCourse(course1.id, student2.id);
manager.enrollStudentToCourse(course2.id, student2.id);

// Summary
console.log(CourseManager.generateReport(manager));