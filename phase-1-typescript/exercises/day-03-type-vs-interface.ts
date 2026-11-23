interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}

type Role = "admin" | "staff" | "intern";

type Account = {
  username: string;
  role: Role;
};

const employeeOne: Employee = {
  name: "Juan Dela Cruz",
  age: 24,
  position: "admin",
};

console.log(`${employeeOne.name}, ${employeeOne.age}, ${employeeOne.position}`);

const accountOne: Account = { username: "juanpogi", role: "admin" }; //Mag eeror kapag naglagay ng value na hindi naman nadeclare sa types

console.log(`Username: ${accountOne.username} Job Title: ${accountOne.role} `);
