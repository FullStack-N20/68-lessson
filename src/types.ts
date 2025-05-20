// Boolean

let number = true

// Number

const num: number = 1;
const PI: number = 3.14;
let one = 1;
let two: number;

// String

const str1: string = "Hello TS";
let strNum = "7";
let str3: string;

// concat

let strNum2 = "15";
let strResult = strNum + strNum2;

// console.log(strResult); 


// Any

let myVar: any = 1;
myVar = "Hello";
myVar = true;

let myVar2 = myVar as number;

console.log(typeof myVar2); 

type MyType = number | string | boolean;
let myVar3: MyType = 1;
myVar3 = "Hello";   
myVar3 = true;


function getUser(user: string | string[]) {
    if(Array.isArray(user)) {
        console.log(user.join(", "));
    } else {
        console.log(user)
        return user
    }
}

getUser("John Doe")
getUser(["John Doe", "Jane Doe"])


function users(): never {
    throw new Error("Error")
}


class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}