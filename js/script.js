"use strict";
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }
    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
