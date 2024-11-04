// 1. Extending and Merging Interfaces
// Define Address interface
interface Address {
    street: string;
    city: string;
    zipCode: string;
  }
  
  // Define User interface
  interface User {
    name: string;
    age: number;
  }
  
  // Define UserWithAddress interface by extending User and Address
  interface UserWithAddress extends User, Address {
    email: string;
  }
  
  // Test
  const user: UserWithAddress = {
    name: "Dima",
    age: 30,
    street: "Main St",
    city: "Kyiv",
    zipCode: "01001",
    email: "dima@example.com"
  };
  
  console.log(user);

// 2. Creating Data Types with Nested Interfaces
// Define Product interface
interface Product {
    name: string;
    price: number;
    category: {
      categoryName: string;
      categoryId: number;
    };
  }
  
  // Define Order interface
  interface Order {
    orderId: string;
    userId: string;
    products: Product[];
  }
  
  // Define an array type for orders
  type Orders = Order[];
  
  // Test
  const orders: Orders = [
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

// 3. Required and Optional Fields
// Define Person interface
interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
}

// Function to return full name
function getFullName(person: Person): string {
  return person.middleName
    ? `${person.firstName} ${person.middleName} ${person.lastName}`
    : `${person.firstName} ${person.lastName}`;
}

// Test cases
const person1: Person = { firstName: "Sergii", lastName: "Petrov" };
const person2: Person = { firstName: "Mariaya", lastName: "Ivanova", middleName: "Sergeevna" };

console.log(getFullName(person1));
console.log(getFullName(person2));

// 4. Creating an Interface for Reading Settings
// Define Settings interface
interface Settings {
    theme: "light" | "dark";
    notifications: boolean;
    autoSave: {
      enabled: boolean;
      interval: number;
    };
  }
  
  // Function to apply settings
  function applySettings(settings: Settings): void {
    console.log(`Theme set to ${settings.theme}`);
    
    if (settings.notifications) {
      console.log("Notifications are enabled.");
    } else {
      console.log("Notifications are disabled.");
    }
  
    if (settings.autoSave.enabled) {
      console.log(`Auto-save is enabled with interval: ${settings.autoSave.interval} minutes.`);
    } else {
      console.log("Auto-save is disabled.");
    }
  }
  
  // Test
  const appSettings: Settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
      enabled: true,
      interval: 5
    }
  };
  
  applySettings(appSettings);