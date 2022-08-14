import { Routes } from '@angular/router';
import { UserCreateComponent } from '../componentes/user-create/user-create.component';
import { UserEditComponent } from '../componentes/user-edit/user-edit.component';
import { USER_ROUTES } from '../constants/user.constants';
import { UserComponent } from '../user.component';

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
