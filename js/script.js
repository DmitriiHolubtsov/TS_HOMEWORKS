"use strict";
// Test data for UniversityRecord
const universityRecord = {
    students: {
        s1: { id: 's1', name: 'Alice', age: 20 },
        s2: { id: 's2', name: 'Bob', age: 22 },
        s3: { id: 's3', name: 'Charlie', age: 21 },
    },
    grades: {
        s1: { Math: 85, Science: 92, Literature: 78, History: 88 },
        s2: { Math: 90, Science: 88, Literature: 84, History: 70 },
        s3: { Math: 75, Science: 80, Literature: 90, History: 85 },
    }
};
// Function to get a student's grades
const getStudentGrades = (universityRecord, studentId) => { var _a; return (_a = universityRecord.grades[studentId]) !== null && _a !== void 0 ? _a : null; };
// Function to get the average grade for a given subject
const getAverageGrade = (universityRecord, subject) => {
    const grades = Object.keys(universityRecord.grades).map(studentId => { var _a; return (_a = universityRecord.grades[studentId][subject]) !== null && _a !== void 0 ? _a : 0; });
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return grades.length > 0 ? total / grades.length : 0;
};
// Testing getStudentGrades function
console.log('Grades for student s1:', getStudentGrades(universityRecord, 's1'));
console.log('Grades for student s4:', getStudentGrades(universityRecord, 's4'));
// Testing getAverageGrade function
console.log('Average grade for Math:', getAverageGrade(universityRecord, 'Math'));
console.log('Average grade for Science:', getAverageGrade(universityRecord, 'Science'));
console.log('Average grade for Literature:', getAverageGrade(universityRecord, 'Literature'));
console.log('Average grade for History:', getAverageGrade(universityRecord, 'History'));
