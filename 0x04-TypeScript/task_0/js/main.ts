// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};

const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

// Create an array containing the student objects
const studentsList: Array<Student> = [studentA, studentB];

// Define CSS styles for the table
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

// Function to display students in a table
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.appendChild(headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.appendChild(bodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.body.appendChild(table);
};

// Display the students
displayStudents(studentsList);

// Add the CSS styles to the document
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);
document.title = 'Task 0';

