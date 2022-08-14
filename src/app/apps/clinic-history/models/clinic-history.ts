import { Pet } from '../../pets/models/pet';

export class ClinicHistory {
  id: number | null | undefined;
  petId: number | null | undefined;
  pet: Pet | null | undefined;
  cratedAt: string | null | undefined;

  constructor({ id, petId, pet, cratedAt }: ClinicHistory | any = {}) {
    this.id = id;
    this.petId = petId;
    this.pet = pet;
    this.cratedAt = cratedAt;
  }
}
