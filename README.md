# Find Top Student Project

This project provides a utility function, `findTopStudent`, that identifies the highest-scoring student from an array of student objects. If multiple students have the highest score, the function prioritizes the earliest submission date. If all students have a score of zero, the function returns an empty array.

Jest is used as the testing framework to verify the function’s correctness. Additionally, Jest’s coverage tools are used to assess test completeness.

## Project Structure

```plaintext
.
├── findTopStudent.js       # Contains the `findTopStudent` function
├── findTopStudent.test.js  # Contains tests for `findTopStudent` function
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

Ensure you have Node.js installed (recommended version >=14.0). You can check your Node version by running:
```bash
node -v
```

### Navigating to the Project Directory

To confirm you are in the correct directory for this project, you can use the `pwd` command, which displays the **present working directory**. This is helpful for verifying your location within the filesystem, especially after cloning the repository.

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Verify your location**:
   ```bash
   pwd
   ```
   The output should display the path to your project’s directory, confirming you are in the right place.

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Usage

The main function is `findTopStudent`, which sorts students by score and date, then returns the top-scoring student’s name or an empty array if there are no valid students.

### Running the Function

Example usage:

```javascript
const findTopStudent = require('./findTopStudent');

const students = [
  { name: "Ivan", score: 35, date: "2022-10-11" },
  { name: "Maria", score: 5, date: "2022-10-10" },
  { name: "Olga", score: 0, date: "" },
  { name: "Stepan", score: 35, date: "2022-10-12" }
];

console.log(findTopStudent(students)); // Output: "Ivan"
```

## Testing

Jest is used to test the `findTopStudent` function.

### Running Tests

To run the tests:

```bash
npm test
```

### Example Tests

```javascript
const findTopStudent = require('./findTopStudent');

const studentGroups = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" }
  ]
  // Additional groups can be added for testing.
];

test("finds best student in the first group", () => {
  expect(findTopStudent(studentGroups[0])).toEqual("Ivan");
});
```

### Parameterized Tests

Parameterized tests are used to simplify test setup and check multiple cases in a compact format:

```javascript
it.each([
  [studentGroups[0], "Ivan"],
  [studentGroups[1], "Marina"],
  [studentGroups[2], []],
])("finds best student in the group", (testData, result) => {
  expect(findTopStudent(testData)).toEqual(result);
});
```

## Code Coverage

To ensure the function meets quality standards, we measure test coverage using Jest. Coverage reports show which lines, functions, and branches of code are covered by tests. We aim for full coverage on all statements and branches.

### Running Coverage Reports

To generate and view a coverage report:

```bash
npm test -- --coverage
```

This command produces an HTML report in the `coverage` directory. Open `coverage/index.html` in your browser to view detailed coverage data.