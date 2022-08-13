import { DocType, GenderType } from '../types/types';

export class User {
  id: number | null;
  firstName: string;
  lastName: string;
  documentType: DocType;
  documentNumber: number | null;
  status: number;
  gender: GenderType;

  constructor({
    id = null,
    firstName = '',
    lastName = '',
    documentType,
    documentNumber = null,
    status = 1,
    gender,
  }: User) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.status = status;
    this.gender = gender;
  }
}
