import { Routes } from '@angular/router';
import { WORKER_ROUTES } from '../constants/worker.constants';
import { WorkerListComponent } from '../pages/worker-list/worker-list.component';
import { WorkerCreateComponent } from '../pages/worker-create/worker-create.component';
import { WorkerEditComponent } from '../pages/worker-edit/worker-edit/worker-edit.component';

export const workerRoutes: Routes = [
  {
    path: WORKER_ROUTES.HOME,
    component: WorkerListComponent,
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
