/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Type1 = number | string | Person;
// type Type2 = (number & string) | Person;

const person: Person = {
  name: "jiYeong",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "Yeong"

person.sayHi();
person.sayHi(1, 2);
