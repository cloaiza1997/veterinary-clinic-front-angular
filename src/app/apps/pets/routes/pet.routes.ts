import { PET_ROUTES } from '../constants/pet.constants';
import { PetCreateComponent } from '../pages/pet-create/pet-create.component';
import { PetEditComponent } from '../pages/pet-edit/pet-edit.component';
import { PetListComponent } from '../pages/pet-list/pet-list.component';
import { Routes } from '@angular/router';

export const petRoutes: Routes = [
  {
    path: PET_ROUTES.HOME,
    component: PetListComponent,
  },
  {
    path: PET_ROUTES.CREATE,
    component: PetCreateComponent,
  },
  {
    path: PET_ROUTES.EDIT,
    component: PetEditComponent,
  },
];
