/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "balck" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
