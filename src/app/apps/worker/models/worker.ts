import { DocType } from '../../../types/types';

export class Worker {
  id: number | null | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  documentType: DocType | undefined;
  documentNumber: number | null | undefined;
  positionName: string | undefined;
  speciality: string | undefined;

  constructor({
    id,
    firstName,
    lastName,
    documentType,
    documentNumber,
    positionName,
    speciality,
  }: Worker | any = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.positionName = positionName;
    this.speciality = speciality;
  }
}
