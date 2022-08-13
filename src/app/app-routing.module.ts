import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './apps/user/user.component';
import { USER_ROUTES } from './utils/constants';

const routes: Routes = [
  {
    path: USER_ROUTES.HOME,
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
