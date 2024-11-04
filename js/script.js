"use strict";
// Test
const user = {
    name: "Dima",
    age: 30,
    street: "Main St",
    city: "Kyiv",
    zipCode: "01001",
    email: "dima@example.com"
};
console.log(user);
// Test
const orders = [
    {
        orderId: "ORD001",
        userId: "USR001",
        products: [
            { name: "Laptop", price: 1500, category: { categoryName: "Electronics", categoryId: 1 } },
            { name: "Mouse", price: 20, category: { categoryName: "Accessories", categoryId: 2 } }
        ]
    },
    {
        orderId: "ORD002",
        userId: "USR002",
        products: [
            { name: "Phone", price: 800, category: { categoryName: "Electronics", categoryId: 1 } }
        ]
    }
];
console.log(orders);
// Function to return full name
function getFullName(person) {
    return person.middleName
        ? `${person.firstName} ${person.middleName} ${person.lastName}`
        : `${person.firstName} ${person.lastName}`;
}
// Test cases
const person1 = { firstName: "Sergii", lastName: "Petrov" };
const person2 = { firstName: "Mariaya", lastName: "Ivanova", middleName: "Sergeevna" };
console.log(getFullName(person1));
console.log(getFullName(person2));
// Function to apply settings
function applySettings(settings) {
    console.log(`Theme set to ${settings.theme}`);
    if (settings.notifications) {
        console.log("Notifications are enabled.");
    }
    else {
        console.log("Notifications are disabled.");
    }
    if (settings.autoSave.enabled) {
        console.log(`Auto-save is enabled with interval: ${settings.autoSave.interval} minutes.`);
    }
    else {
        console.log("Auto-save is disabled.");
    }
}
// Test
const appSettings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5
    }
};
applySettings(appSettings);
