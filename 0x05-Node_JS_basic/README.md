# NodeJS Basics

This project contains tasks for learning the basics of Node.js.

## Tasks To Complete

+ [x] 0. **Executing basic JavaScript with Node.js**<br/>[0-console.js](0-console.js) contains a module that exports a function named `displayMessage` that prints the string argument to `STDOUT`.

+ [x] 1. **Using Process stdin**<br/>[1-stdin.js](1-stdin.js) contains a script that will be executed via the command line with the following requirements:
  + It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line).
  + The user should be able to input their name on a new line.
  + The program should display `Your name is: INPUT`.
  + When the user ends the program, it should display `This important software is now closing` (followed by a new line).

+ [x] 2. **Reading a file synchronously with Node.js**<br/>[2-read_file.js](2-read_file.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents` that accepts a path as an argument.
  + The function should attempt to read the database file synchronously.
  + The database file has the same format as [database.csv](database.csv).
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console: `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, along with the list in the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV files can contain empty lines (at the end) - they are not considered valid students!

+ [x] 3. **Reading a file asynchronously with Node.js**<br/>[3-read_file_async.js](3-read_file_async.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents` that accepts a path as an argument (same as in [2-read_file.js](2-read_file.js)).
  + The function should attempt to read the database file asynchronously.
  + The function should return a Promise.
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console: `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, along with the list in the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV files can contain empty lines (at the end) - they are not considered valid students!

+ [x] 4. **Create a small HTTP server using Node's HTTP module**<br/>[4-http.js](4-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + The HTTP server should listen on port 1245.
  + It should display `Hello Holberton School!` in the page body for any endpoint as plain text.

+ [x] 5. **Create a more complex HTTP server using Node's HTTP module**<br/>[5-http.js](5-http.js) contains a script that creates and exports a more complex HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + The HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
  + When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as an argument to the file.
  + CSV files can contain empty lines (at the end) - they are not considered valid students!

+ [x] 6. **Create a small HTTP server using Express**<br/>[6-http_express.js](6-http_express.js) contains a script that creates and exports a small HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + The HTTP server should listen on port 1245.
  + It should display `Hello Holberton School!` in the page body for the endpoint `/`.

+ [x] 7. **Create a more complex HTTP server using Express**<br/>[7-http_express.js](7-http_express.js) contains a script that creates and exports a more complex HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + The HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
  + When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as an argument to the file.
  + CSV files can contain empty lines (at the end) - they are not considered valid students!

+ [x] 8. **Organize a complex HTTP server using Express**<br/>Create a full server in a directory named [`full_server`](full_server) with the following requirements:
  + **8.1 Organize the structure of the server**
    + Create 2 directories within the [full_server](full_server) folder:
      + [controllers](full_server/controllers/).
      + [routes](full_server/routes/).
    + Create a file [full_server/utils.js](full_server/utils.js) with a function named `readDatabase` that accepts a file path as an argument:
      + It should read the database asynchronously.
      + It should return a promise.
      + When the file is not accessible, it should reject the promise with the error.
      + When the file can be read, it should return an object of arrays of the first names of students per field.
  + **8.2 Write the App controller**<br />Inside [full_server/controllers/AppController.js](full_server/controllers/AppController.js):
    + Create a class named `AppController` with a static method named `getHomepage`.
    + The method should accept `request` and `response` as arguments and return a 200 status with the message `Hello Holberton School!`.
  + **8.3 Write the Students controller**<br />Inside [full_server/controllers/StudentsController.js](full_server/controllers/StudentsController.js), create a class named `StudentsController` with two static methods:
    + `getAllStudents`:
      + The method should accept `request` and `response` as arguments.
      + It should return a status 200.
      + It should call the function `readDatabase` from [full_server/utils.js](full_server/utils.js) and display:
        + First line: `This is the list of our students`.
        + For each field (ordered alphabetically, case-insensitive), a line displaying the number of students in the field, and the list of first names (ordered by appearance in the database file) with the format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
      + If the database is not available, it should return a status 500 with the error message `Cannot load the database`.
    + `getAllStudentsByMajor`:
      + The method should accept `request` and `response` as arguments.
      + It should return a status 200.
      + It should use a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user passes another parameter, the server should return a 500 status with the error `Major parameter must be CS or SWE`.
      + It should call the function `readDatabase` from [full_server/utils.js](full_server/utils.js) and display the list of first names for students in the specified field, with the format: `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`.
      + If the database is not available, it should return a status 500 with the error message `Cannot load the database`.
  + **8.4 Write the routes**<br />Inside [full_server/routes/index.js](full_server/routes/index.js):
    + Link the route `/` to the `AppController`.
    + Link the route `/students` and `/students/:major` to the `StudentsController`.
  + **8.5 Write the server reusing everything you created**<br />Inside [full_server/server.js](full_server/server.js), create a small Express server:
    + It should use the routes defined in [full_server/routes/index.js](full_server/routes/index.js).
    + It should use the port `1245`.
  + **8.6 Update `package.json` (
