// Step 1: Base Class User
class BaseModel {
  constructor() {
    this.createdAt = new Date();
  }

  validate() {
    throw new Error("Abstract method 'validate' must be implemented.");
  }
}

class User extends BaseModel {
  static nextId = 1;

  #password;

  constructor(name, email, password) {
    super();
    this.id = User.nextId++;
    this.name = name;
    this.email = email;
    this.#password = password;

    this.validate();
  }

  get info() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }

  set email(value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      throw new Error("Invalid email format.");
    }
    this._email = value;
  }

  get email() {
    return this._email;
  }

  changePassword(newPassword) {
    this.#password = newPassword;
  }

  validate() {
    if (!this.name || !this.email || !this.#password) {
      throw new Error("User validation failed: all fields are required.");
    }
  }
}

// Step 2: Inheritance
class Student extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
  }
}

class Teacher extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.subjects = [];
  }

  addSubject(subject) {
    this.subjects.push(subject);
  }
}

// Step 3: Class Course
class Course extends BaseModel {
  static nextId = 1;

  #students = [];

  constructor(name, teacher = null) {
    super();
    this.id = Course.nextId++;
    this.name = name;
    this.teacher = teacher;

    this.validate();
  }

  addStudent(student) {
    if (!(student instanceof Student)) {
      throw new Error("Only instances of Student can be added.");
    }
    this.#students.push(student);
  }

  removeStudent(studentId) {
    this.#students = this.#students.filter(student => student.id !== studentId);
  }

  listStudents() {
    return this.#students.map(student => student.info);
  }

  validate() {
    if (!this.name) {
      throw new Error("Course validation failed: name is required.");
    }
  }
}

// Step 4: System Manager
class CourseManager {
  constructor() {
    this.users = [];
    this.courses = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      throw new Error("Only instances of User can be added.");
    }
    this.users.push(user);
  }

  addCourse(course) {
    if (!(course instanceof Course)) {
      throw new Error("Only instances of Course can be added.");
    }
    this.courses.push(course);
  }

  assignTeacherToCourse(courseId, teacherId) {
    const course = this.courses.find(c => c.id === courseId);
    const teacher = this.users.find(u => u.id === teacherId && u instanceof Teacher);

    if (!course || !teacher) {
      throw new Error("Invalid course or teacher ID.");
    }

    course.teacher = teacher;
  }

  enrollStudentToCourse(courseId, studentId) {
    const course = this.courses.find(c => c.id === courseId);
    const student = this.users.find(u => u.id === studentId && u instanceof Student);

    if (!course || !student) {
      throw new Error("Invalid course or student ID.");
    }

    course.addStudent(student);
  }

  static generateReport(manager) {
    return manager.courses.map(course => ({
      Course: course.name,
      Teacher: course.teacher ? course.teacher.name : "Unassigned",
      Students: course.listStudents()
    }));
  }
}

// Step 5-7: Testing

// Create users
const student1 = new Student("Alice", "alice@example.com", "password123");
const student2 = new Student("Bob", "bob@example.com", "password456");
const teacher1 = new Teacher("Dr. Smith", "smith@example.com", "securePass");

// Create courses
const course1 = new Course("Mathematics");
const course2 = new Course("Physics");

// Create manager
const manager = new CourseManager();

// Add users and courses
manager.addUser(student1);
manager.addUser(student2);
manager.addUser(teacher1);
manager.addCourse(course1);
manager.addCourse(course2);

// Assign teacher and enroll students
manager.assignTeacherToCourse(course1.id, teacher1.id);
manager.enrollStudentToCourse(course1.id, student1.id);
manager.enrollStudentToCourse(course1.id, student2.id);

// Generate report
console.log(CourseManager.generateReport(manager));