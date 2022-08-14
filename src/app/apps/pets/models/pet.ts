import { GenderType } from '../../../types/types';
import { User } from '../../user/models/user';

export class Pet {
  id: number | null | undefined;
  name: string | undefined;
  breed: string | undefined;
  gender: GenderType | undefined;
  userId: number | null | undefined;
  user: User | null | undefined;

  constructor({ id, name, breed, gender, userId, user }: Pet | any = {}) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.userId = userId;
    this.user = user;
  }
}
