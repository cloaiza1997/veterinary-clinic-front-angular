import { Routes } from '@angular/router';
import { USER_ROUTES } from '../constants/user.constants';
import { UserComponent } from '../pages/user-list/user.component';
import { UserCreateComponent } from '../pages/user-create/user-create.component';
import { UserEditComponent } from '../pages/user-edit/user-edit.component';

export const userRoutes: Routes = [
  {
    path: USER_ROUTES.HOME,
    component: UserComponent,
  },
  {
    path: USER_ROUTES.CREATE,
    component: UserCreateComponent,
  },
  {
    path: USER_ROUTES.EDIT,
    component: UserEditComponent,
  },
];
