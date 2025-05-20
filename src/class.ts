class Bags {
    readonly name: string;
    color: string;
    readonly material: string;
    price : number;

    constructor(name: string, color: string, material: string, price: number) {
        this.name = name;
        this.color = color;
        this.material = material;
        this.price = price;
    };

    info() {
        return `${this.name} -- ${this.price}`
    };
}

const bag1 = new Bags("Draco", "metallic", "draco-lire", 7000)
console.log(bag1.info())
bag1.price = 5000;
// bag1.name = "Draco 2" // error: Cannot assign to 'name' because it is a read-only property.



// ====================================
class NewStyleBags {
    color: string;    
    material : string;

    constructor(
        readonly name: string,
        color: string,
        material: string,
        readonly price : number,
    ) {
        
        this.color = color;
        this.material = material;
       ;
    };

    info() {
        return `${this.name} -- ${this.price}`
    };
}

// ====================================
class NewStyleBags1 {

    constructor(
        readonly name: string,
        public color: string,
        private  _material: string,
        readonly price : number,
    ) {} 

    info() {
        return `${this.name} -- ${this.price}`
    };
}


// ====================================

class Nation {
    constructor(
        public name: string,
        private _age: number,
        protected _language: string,
        private _religion: string,
    ) {}

    set age(newAge: number) {
        this._age = newAge;
    };

    get age() {
        return this._age;
    };

    set religion(newReligion: string) {
        this._religion = newReligion;
    };

    get religion() {
        return this._religion;
    };
    
    about() {
        return `Nation is ${this.name}, language is ${this._language}`
    };
}


// ====================================
// inheritance

class Uzbek extends Nation {
    constructor (
        name: string,
        age: number,
        language: string,
        religion: string,
        public history: string,
    ) {
        super(name, age, language, religion);
    };

    public setLang(lang: string) {
        this._language = lang;
    };

    override about() {
        return `${super.about()} religion is ${this.religion}, history is ${this.history}`
    };
}


/// ================== ABSTRACT ==================

abstract class Chess {
    abstract draw(): void;  
    abstract move(): string;
    info(s: string) {
        console.log(s)
    };
};

class Rook extends Chess {
    draw(): void {
        console.log('cheese')
    }
    move(): string {
        return 'b4'
    }

    override info(s: string): void {
        
    }
}

const rook = new Rook()
rook.info('halo')
rook.move()



// =========== Implements ============

interface LoggerService {
    log: (mes: string) => void;
}

class Logger implements LoggerService {
    log(mes: string) {
        console.log(mes)
    }
   
}

// ========== Static =========== 

class StaticClass {
    static num = 1;
}

console.log(StaticClass.num)