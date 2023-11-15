//You have a dataset representing a list of students and their exam scores. The data is organized as an array of objects, where each object contains information about a student, including their name, ID, and an array of exam scores.

const students = [
  {
    name: "Alice",
    id: 101,
    scores: [85, 92, 88]
  },
  {
    name: "Bob",
    id: 102,
    scores: [78, 90, 89]
  },
  {
    name: "Charlie",
    id: 103,
    scores: [95, 87, 92]
  },
  // Add more students if needed
];

//Access the name of the third student in the array and log it to the console.

let thirdStudent = students[2]
console.log(thirdStudent);

console.log(thirdStudent.name);

//Access the second exam score of the first student and log it to the console.
let secondScore=students[0]
console.log(secondScore);

console.log(secondScore.scores[1]);

//Access the ID of the last student and log it to the console.
let lastStudent = students[2]
console.log(lastStudent);

console.log(lastStudent.id);

//Calculate and log the average score for each student. (Hint: You may want to create a function to calculate the average.)


//Add a new student to the array with your name, a unique ID, and an array of exam scores.

let newStudent = {
    name: "kigen",
    id:4833,
    scores: [75,85,95],
};

//accessing student in students array
students[3]= newStudent;

console.log(students);

