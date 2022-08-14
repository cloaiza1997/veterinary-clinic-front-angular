import { DocType, GenderType } from '../../../types/types';

export class User {
  id: number | null | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  documentType: DocType | undefined;
  documentNumber: number | null | undefined;
  status: number | undefined;
  gender: GenderType | undefined;

  constructor({
    id,
    firstName,
    lastName,
    documentType,
    documentNumber,
    status,
    gender,
  }: User | any = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.status = status;
    this.gender = gender;
  }
}
