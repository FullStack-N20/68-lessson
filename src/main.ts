// // 1. Interface va Class
// interface Vehicle {
//   brand: string;
//   model: string;
//   year: number;
//   start(): void;
// }

// class Car implements Vehicle {
//   brand: string;
//   model: string;
//   year: number;

//   constructor(brand: string, model: string, year: number) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   start(): void {
//     console.log(`${this.brand} ${this.model} is starting...`);
//   }
// }

// const car1 = new Car("Toyota", "Corolla", 2020);
// const car2 = new Car("BMW", "X5", 2022);
// const car3 = new Car("Chevrolet", "Malibu", 2019);

// car1.start();
// car2.start();
// car3.start();

// // 2. Enum
// enum UserRole {
//   ADMIN,
//   EDITOR,
//   VIEWER
// }

// function canEdit(role: UserRole): boolean {
//   return role === UserRole.ADMIN || role === UserRole.EDITOR;
// }

// function canDelete(role: UserRole): boolean {
//   return role === UserRole.ADMIN;
// }

// const user1 = UserRole.ADMIN;
// const user2 = UserRole.EDITOR;
// const user3 = UserRole.VIEWER;

// console.log(canEdit(user1));
// console.log(canDelete(user1));
// console.log(canEdit(user2));
// console.log(canDelete(user2));
// console.log(canEdit(user3));
// console.log(canDelete(user3));

// // 3. Generic
// function identity<T>(value: T): T {
//   return value;
// }

// console.log(identity<number>(42));
// console.log(identity<string>("hello"));
// console.log(identity<{ name: string }>({ name: "Aziz" }));

// class Stack<T> {
//   private items: T[] = [];

//   push(item: T): void {
//     this.items.push(item);
//   }

//   pop(): T | undefined {
//     return this.items.pop();
//   }
// }

// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// console.log(numberStack.pop());
// console.log(numberStack.pop());

// const stringStack = new Stack<string>();
// stringStack.push("a");
// stringStack.push("b");
// console.log(stringStack.pop());
// console.log(stringStack.pop());

// // 4. OOP - BankAccount, PremiumAccount
// class BankAccount {
//   readonly accountNumber: string;
//   private balance: number;
//   static bankName: string = "OpenAI Bank";

//   constructor(accountNumber: string, ownerName: string, balance: number) {
//     this.accountNumber = accountNumber;
//     this._ownerName = ownerName;
//     this.balance = balance;
//   }

//   private _ownerName: string;

//   public get ownerName(): string {
//     return this._ownerName;
//   }

//   public set ownerName(name: string) {
//     if (name.length >= 3) {
//       this._ownerName = name;
//     }
//   }

//   public getBalance(): number {
//     return this.balance;
//   }

//   public deposit(amount: number): void {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   public withdraw(amount: number): void {
//     if (amount > 0 && this.balance >= amount) {
//       this.balance -= amount;
//     }
//   }
// }

// class PremiumAccount extends BankAccount {
//   public withdraw(amount: number): void {
//     const fee = 10;
//     const total = amount + fee;
//     if (amount > 0 && this.getBalance() >= total) {
//       super.withdraw(total);
//     }
//   }
// }

// const acc = new BankAccount("123456", "MuhammadAziz", 1000);
// acc.deposit(500);
// acc.withdraw(200);
// console.log(acc.getBalance());

// const prem = new PremiumAccount("999999", "John", 2000);
// prem.withdraw(100);
// console.log(prem.getBalance());

// // 5. Abstract class & method
// abstract class Shape {
//   abstract getArea(): number;
// }

// class Circle extends Shape {
//   constructor(private radius: number) {
//     super();
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(private width: number, private height: number) {
//     super();
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);
// console.log(circle.getArea());
// console.log(rectangle.getArea());

// // 6. Utility Types
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description?: string;
// }

// function updateProduct(product: Product, updates: Partial<Product>): Product {
//   return { ...product, ...updates };
// }

// type ProductPreview = Pick<Product, "id" | "name">;
// const preview: ProductPreview = { id: 1, name: "Laptop" };

// const readonlyProduct: Readonly<Product> = {
//   id: 1,
//   name: "Phone",
//   price: 999,
//   description: "Smartphone"
// };

// // readonlyProduct.price = 1000; // ❌ Error: Cannot assign to 'price' because it is a read-only property
