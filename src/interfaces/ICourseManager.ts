import { Course } from "../classes/Course";
import { User } from "../classes/User";

export interface ICourseManager {
  addUser(user: User): void;
  addCourse(course: Course): void;
}