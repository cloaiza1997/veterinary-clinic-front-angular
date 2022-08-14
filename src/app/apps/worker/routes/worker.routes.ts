import { Routes } from '@angular/router';
import { WORKER_ROUTES } from '../constants/worker.constants';
import { WorkerComponent } from '../pages/worker-list/worker.component';
import { WorkerCreateComponent } from '../pages/worker-create/worker-create.component';
import { WorkerEditComponent } from '../pages/worker-edit/worker-edit/worker-edit.component';

export const workerRoutes: Routes = [
  {
    path: WORKER_ROUTES.HOME,
    component: WorkerComponent,
  },
  {
    path: WORKER_ROUTES.CREATE,
    component: WorkerCreateComponent,
  },
  {
    path: WORKER_ROUTES.EDIT,
    component: WorkerEditComponent,
  },
];
