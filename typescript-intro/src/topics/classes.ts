export class Person {
    public firstName: string;
    public lastName: string;
    private address: string;

    // Usar esta configuracion afecta los tiempos de ejecución y el comportamiento
    // no se limita a los tipos de datos.
    // constructor(
    //     public name: string, 
    //     private address: string = 'No address',
    // ) {}

    constructor(name: string, lastName: string, address: string = 'No Address') {
        this.firstName = name;
        this.lastName = lastName;
        this.address = address;
    }
}

// export class Hero extends Person {
//     public alterEgo: string;
//     public age: number;
//     public realName: string;

//     constructor(
//          alterEgo: string,
//          age: number,
//          realName: string,
//     ) {
//         super(realName, 'New York');
//         this.alterEgo = alterEgo;
//         this.age = age;
//         this.realName = realName;
//     }
// }

// Example of dependency injection
export class Hero {
    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(
        alterEgo: string,
        age: number,
        realName: string,
        person: Person,
    ) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}
const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman);