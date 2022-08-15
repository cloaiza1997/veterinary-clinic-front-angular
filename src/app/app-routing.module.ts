import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Routes
import { clinicHistoryRoutes } from './apps/clinic-history/routes/clinic-history.routes';
import { homeRoutes } from './apps/home/home.routes';
import { petRoutes } from './apps/pets/routes/pet.routes';
import { userRoutes } from './apps/user/routes/user.routes';
import { workerRoutes } from './apps/worker/routes/worker.routes';

const routes: Routes = [
  ...clinicHistoryRoutes,
  ...homeRoutes,
  ...petRoutes,
  ...userRoutes,
  ...workerRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
