import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Routes
import { userRoutes } from './apps/user/routes/user.routes';

const routes: Routes = [...userRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
