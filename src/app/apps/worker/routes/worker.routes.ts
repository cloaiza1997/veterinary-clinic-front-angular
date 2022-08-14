import { Routes } from '@angular/router';
import { WORKER_ROUTES } from '../constants/worker.constants';
import { WorkerComponent } from '../worker.component';

export const workerRoutes: Routes = [
  {
    path: WORKER_ROUTES.HOME,
    component: WorkerComponent,
  },
  // {
  //   path: USER_ROUTES.CREATE,
  //   component: UserCreateComponent,
  // },
  // {
  //   path: USER_ROUTES.EDIT,
  //   component: UserEditComponent,
  // },
];
