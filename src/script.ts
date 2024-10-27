function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return (obj.map((item) => deepClone(item)) as unknown) as T;
  }

  const copy = {} as { [K in keyof T]: T[K] };
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key as keyof T] = deepClone(obj[key as keyof T]);
    }
  }

  return copy;
}

const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);

console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);