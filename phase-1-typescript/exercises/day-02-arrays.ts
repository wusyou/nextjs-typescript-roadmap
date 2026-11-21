//Exercise 1
const food: string[] = ["adobo", "sinigang", "tokwa"];

const grades: number[] = [90, 85, 88, 92, 95];
const totalGrades: number = grades.reduce((sum, grade) => sum + grade, 0);
const average: number = totalGrades / grades.length;

const mixed: (string | number)[] = ["Ana", 21, "Ben", 19];

food.push("kaldereta"); // food.push(10);

console.log(`Favorite Food: ${food.join(", ")}`);
console.log(`Average: ${average}`);
console.log(mixed);

//Exercise 2
const product: [string, number] = ["Adobo", 150];

const room: [number, number] = [141, 141];

const [name, price] = product;
console.log(`${name}: ${price}`);

const [width, length] = room;
const area: number = width * length;
console.log(`Total Room's Area: ${area} sqm`);

const wrongProduct: [string, number] = ["Adobo", 150]; //const wrongProduct: [string, number] = [150, "Adobo"];
