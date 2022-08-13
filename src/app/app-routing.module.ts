import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './apps/user/componentes/user-create/user-create.component';
import { UserComponent } from './apps/user/user.component';
import { USER_ROUTES } from './utils/constants';

const routes: Routes = [
  {
    path: USER_ROUTES.HOME,
    component: UserComponent,
  },
  {
    path: USER_ROUTES.CREATE,
    component: UserCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
