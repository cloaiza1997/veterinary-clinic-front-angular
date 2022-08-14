import { Routes } from '@angular/router';
import { USER_ROUTES } from '../constants/user.constants';
import { UserListComponent } from '../pages/user-list/user-list.component';
import { UserCreateComponent } from '../pages/user-create/user-create.component';
import { UserEditComponent } from '../pages/user-edit/user-edit.component';

export const userRoutes: Routes = [
  {
    path: USER_ROUTES.HOME,
    component: UserListComponent,
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
