"use strict";
class BaseModel {
    constructor() {
        this.createdAt = new Date();
    }
}
class User extends BaseModel {
    constructor(name, email, password) {
        super();
        this.id = User.idCounter++;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Invalid email address");
        }
        this._email = value;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }
    get info() {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this._email}`;
    }
    validate() {
        if (!this.name || !this._email || !this.password) {
            throw new Error("User validation failed");
        }
    }
}
User.idCounter = 1;
class Student extends User {
    constructor() {
        super(...arguments);
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course);
    }
}
class Teacher extends User {
    constructor() {
        super(...arguments);
        this.subjects = [];
    }
    addSubject(subject) {
        this.subjects.push(subject);
    }
}
class Course extends BaseModel {
    constructor(name, teacher) {
        super();
        this.students = [];
        this.id = Course.idCounter++;
        this.name = name;
        this.teacher = teacher;
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
    }
    listStudents() {
        return this.students;
    }
    validate() {
        if (!this.name) {
            throw new Error("Course validation failed: name is required");
        }
    }
}
Course.idCounter = 1;
class CourseManager {
    constructor() {
        this.users = [];
        this.courses = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    addCourse(course) {
        this.courses.push(course);
    }
    assignTeacherToCourse(courseId, teacherId) {
        const course = this.courses.find(course => course.id === courseId);
        const teacher = this.users.find(user => user.id === teacherId && user instanceof Teacher);
        if (!course || !teacher) {
            throw new Error("Course or teacher not found");
        }
        course.teacher = teacher;
    }
    enrollStudentToCourse(courseId, studentId) {
        const course = this.courses.find(course => course.id === courseId);
        const student = this.users.find(user => user.id === studentId && user instanceof Student);
        if (!course || !student) {
            throw new Error("Course or student not found");
        }
        course.addStudent(student);
    }
    static generateReport(courses) {
        return courses.map(course => {
            const teacherName = course.teacher ? course.teacher.name : "No teacher assigned";
            const studentNames = course.listStudents().map(student => student.name).join(", ") || "No students enrolled";
            return `Course: ${course.name}\nTeacher: ${teacherName}\nStudents: ${studentNames}\n`;
        }).join("\n");
    }
}
// Testing the system
const manager = new CourseManager();
// Creating users
const student1 = new Student("Alice", "alice@example.com", "password123");
const student2 = new Student("Bob", "bob@example.com", "password456");
const teacher = new Teacher("Dr. Smith", "dr.smith@example.com", "password789");
// Adding users to the system
manager.addUser(student1);
manager.addUser(student2);
manager.addUser(teacher);
// Creating courses
const course1 = new Course("Mathematics");
const course2 = new Course("Physics");
// Adding courses to the system
manager.addCourse(course1);
manager.addCourse(course2);
// Assigning teacher to courses
manager.assignTeacherToCourse(course1.id, teacher.id);
manager.assignTeacherToCourse(course2.id, teacher.id);
// Enrolling students in courses
manager.enrollStudentToCourse(course1.id, student1.id);
manager.enrollStudentToCourse(course1.id, student2.id);
manager.enrollStudentToCourse(course2.id, student1.id);
// Generating report
const report = CourseManager.generateReport(manager["courses"]);
console.log(report);
