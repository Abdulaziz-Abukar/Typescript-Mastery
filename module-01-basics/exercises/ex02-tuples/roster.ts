type Employee = [id: number, name: string];
const employeeOne: Employee = [25, "abdul"];
const employeeTwo: Employee = [15, "aesha"];
const employeeThree: Employee = [11, "josh"];
const arrayOfTuples = [employeeOne, employeeTwo, employeeThree];

function findNameById(roster: Employee[], id: number): string | undefined {
  const found = roster.find((entry) => entry[0] === id);
  return found ? found[1] : undefined;
}
console.log(findNameById(arrayOfTuples, 15)); // aesha;
console.log(findNameById(arrayOfTuples, 99)); // undefined;
