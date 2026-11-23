function getArea(width: number, height: number): number {
  return width * height;
}

console.log("Area:", getArea(4, 3));

const isAdult = (age: number): boolean => 18 < age;

console.log("17 adult?", isAdult(17)); // false
console.log("18 adult?", isAdult(18)); // true
console.log("25 adult?", isAdult(25)); // true

function printReceipt(item: string, price: number): void {
  console.log(`${item}, ${price}`);
}

printReceipt("Adobo", 120);

function computeTotal(
  price: number,
  quantity: number,
  discount: number = 0,
): number {
  return price * quantity * (discount / 100);
}

console.log("Walang discount:", computeTotal(100, 2));
console.log("May 10% discount:", computeTotal(100, 2, 10));

type Student = {
  name: string;
  grades: number[];
};

function getAverage(student: Student): number {
  const total = student.grades.reduce((sum, grade) => sum + grade, 0);
  return total / student.grades.length;
}

const student: Student = { name: "Juan", grades: [90, 85, 95] };
console.log(`${student.name} average:`, getAverage(student));
