interface Teacher {
  name: string;
  subject: string;
}

interface School {
  name: string;
  teachers: Teacher[];
}

const teacherOne: Teacher = {
  name: "Mr. Dickson",
  subject: "Math",
};
const teacherTwo: Teacher = {
  name: "Mrs. Watson",
  subject: "History",
};
const teacherThree: Teacher = {
  name: "Miss. Apples",
  subject: "English",
};

const mySchool: School = {
  name: "Royal Knights High School",
  teachers: [teacherOne, teacherTwo, teacherThree],
};

console.log(mySchool);
