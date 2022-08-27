class Doggy {
    constructor(public readonly name: string, public readonly age: number) {

    }
}

const lgg = new Doggy("LG", 13)
// lgg.name = "Foo"

class DogList {
    private doggies: Doggy[] = []

    static instance: DogList = new DogList();

    private constructor() { }

    public addDog(dog: Doggy[]) {
        this.doggies.push(...dog)
    }

    getDogs() {
        return this.doggies
    }
} //ต้องเรียกผ่าน instance เพราะว่า constructor private อยู่

DogList.instance.addDog([lgg, { name: 'bobo', age: 13 }])

console.log(DogList.instance.getDogs())
