import { CLINIC_HISTORY_ROUTES } from '../constants/clinic-history.constants';
import { ClinicHistoryDetailComponent } from '../pages/clinic-history-detail/clinic-history-detail.component';
import { Routes } from '@angular/router';

export const clinicHistoryRoutes: Routes = [
  {
    path: CLINIC_HISTORY_ROUTES.DETAIL,
    component: ClinicHistoryDetailComponent,
  },
  // {
  //   path: PET_ROUTES.CREATE,
  //   component: PetCreateComponent,
  // },
  // {
  //   path: PET_ROUTES.EDIT,
  //   component: PetEditComponent,
  // },
];
