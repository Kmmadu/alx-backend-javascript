/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row element
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row element and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row element by adding an age property
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row element using the RowID
CRUD.deleteRow(newRowID);

