"use strict";
function filterByProperty(array, property, value) {
    return array.filter((item) => item[property] === value);
}
const users = [
    { id: 1, name: 'Vova', age: 25, isActive: true },
    { id: 2, name: 'Sasha', age: 30, isActive: false },
    { id: 3, name: 'Dima', age: 35, isActive: true },
];
const activeUsers = filterByProperty(users, 'isActive', true);
console.log(activeUsers);
const usersWithAge30 = filterByProperty(users, 'age', 30);
console.log(usersWithAge30);
