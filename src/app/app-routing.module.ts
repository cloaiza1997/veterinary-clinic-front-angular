import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Routes
import { userRoutes } from './apps/user/routes/user.routes';
import { workerRoutes } from './apps/worker/routes/worker.routes';

const routes: Routes = [...userRoutes, ...workerRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
