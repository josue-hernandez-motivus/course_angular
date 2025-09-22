function classDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override'
    }
}


@classDecorator
class SuperClass {
    public myProperty: string = 'Property';

    print() {
        console.log('My property is: ' + this.myProperty);
    }
}

console.log(SuperClass)
const myClass = new SuperClass();
console.log(myClass);