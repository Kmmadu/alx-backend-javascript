// Teacher interface with required and optional fields, and an index signature for additional properties
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

// Directors interface extending Teacher and adding a required field
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher function
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Interface for StudentClass constructor
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface for StudentClass methods
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
export class StudentClass implements IStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

// Function to create a new StudentClass instance
export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}

