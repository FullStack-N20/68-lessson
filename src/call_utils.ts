enum Direction1 {
    up,
    down,
    left = 11,
    right,
};

console.log(Direction1.up); 
console.log(Direction1.down); 
console.log(Direction1.left);
console.log(Direction1.right); 


interface IPosition {
    x: number;
    y: number;
};

function position(): IPosition;
function position(a: number): IPosition;
function position(a: number, b: number): IPosition;

function position(a?: number, b?: number) {
    if (!a && !b ) {
        console.log("halo")
        return{
            x: undefined,
            y: undefined,
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
        };
    }
    return {x: a, y: b};
};

console.log(position());
console.log(position(1));
console.log(position(1,2));


// Generics

function myLog(mes: string | number): string | number {
    return mes;
}

function myLog1<T>(mes: T): T {
    return mes;
}

console.log(myLog(1));
console.log(myLog("1"));



// Practice

interface ILength {
    length: number;
};

interface ICube {
    pm: number;
};

function myLog3<T extends ILength , K >(password: T, arr: K[]): K[] {
    if(password.length > 0) {
        console.log(password.length);
    };
    return arr;
};


// keyof

type Cord = {
    lat: string;
    long: string;
};

type P = keyof Cord;

let a: P = 'lat';
let b: P = 'long';
// let c: P = 'lat' | 'long'; // Error: Type '"lat" | "long"' is not assignable to type 'P'.


// Non-null assertion operator

function log(a: string | null) {
    // a is 100% string here
    // because of the non-null assertion operator
    return a!.toLocaleLowerCase();
};

console.log(log("HELLO"));
