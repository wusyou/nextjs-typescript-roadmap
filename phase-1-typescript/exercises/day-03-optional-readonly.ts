type Task = {
  readonly id: number;
  title: string;
  description?: string;
  isDone: boolean;
};

const taskOne: Task = {
  id: 1,
  title: "First Title",
  description: "First Description",
  isDone: true,
};

const taskTwo: Task = { id: 2, title: "Second Title", isDone: true };

console.log(
  `${taskOne.id}, ${taskOne.title}, ${taskOne.description ?? "No Description"}, ${taskOne.isDone}`,
);

console.log(
  `${taskTwo.id}, ${taskTwo.title}, ${taskTwo.description ?? "No Description"}, ${taskTwo.isDone}`,
);

taskOne.id = 4;

taskTwo.isDone = false;
