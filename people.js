class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop) {
        if (prop === null) {
            return {
                name: this.name,
                age: this.age,
                weight: this.weight,
                gender: this.gender,
            };
        } else if (["name", "age", "weight", "gender"].includes(prop)) {
            return { [prop]: this[prop] };
        } else {
            return null;
        }
    }

    greeting() {
        return "Hi!";
    }
}

class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "man");
    }

    greeting() {
        return `Hi! My name is ${this.name}, and I am ${this.age} years old.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "woman");
    }

    greeting() {
        return `Hi! My name is ${this.name}.`;
    }
}

const peopleArray = [
    new Man("Ihor", 30, 75),
    new Woman("Anna", 25, 60),
    new Man("Alex", 35, 80),
    new Woman("Tanya", 28, 55),
    new Woman("Svetlana", 28, 55),
    new Man("Eugene", 34, 70),
    new Man("Stephan", 20, 70),
    new Man("Alexander", 35, 80),
    new Man("Stanislav", 21, 76),
    new Woman("Liza", 34, 70),
    new Man("Ivan", 24, 73),
    new Man("Abdul", 27, 76),
    new Man("Vitaliy", 18, 65),
    new Man("Volodymyr", 17, 60),
    new Man("Vladyslav", 40, 90),
];

export { peopleArray, Man, Woman };
