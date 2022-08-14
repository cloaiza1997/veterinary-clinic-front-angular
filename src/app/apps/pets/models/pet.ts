import { GenderType } from '../../../types/types';
import { User } from '../../user/models/user';

export class Pet {
  id: number | null | undefined;
  name: string | undefined;
  breed: string | undefined;
  gender: GenderType | undefined;
  userId: number | null | undefined;
  user: User | null | undefined;
  userName: string | null | undefined;
  clinicHistoryId: number | null | undefined;

  constructor({
    id,
    name,
    breed,
    gender,
    userId,
    userName,
    user,
    clinicHistoryId,
  }: Pet | any = {}) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.userId = userId;
    this.userName = userName;
    this.user = user;
    this.clinicHistoryId = clinicHistoryId;
  }
}
