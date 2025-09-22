export class Person {
    public name: string;
    private address: string;

    // Usar esta configuracion afecta los tiempos de ejecución y el comportamiento
    // no se limita a los tipos de datos.
    // constructor(
    //     public name: string, 
    //     private address: string = 'No address',
    // ) {}

    constructor(name: string, address: string = 'No Address') {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor(
         alterEgo: string,
         age: number,
         realName: string,
    ) {
        super(realName, 'New York');
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}
const ironman = new Hero('Ironman', 45, 'Tony Stark');

console.log(ironman);