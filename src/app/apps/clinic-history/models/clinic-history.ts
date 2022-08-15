import { Pet } from '../../pets/models/pet';

export class ClinicHistory {
  id: number | null | undefined;
  petId: number | null | undefined;
  pet: Pet | null | undefined;
  createdAt: string | null | undefined;

  constructor({ id, petId, pet, createdAt }: ClinicHistory | any = {}) {
    this.id = id;
    this.petId = petId;
    this.pet = pet;
    this.createdAt = createdAt;
  }
}
