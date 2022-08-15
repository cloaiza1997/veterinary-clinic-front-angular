import { CLINIC_HISTORY_ROUTES } from '../constants/clinic-history.constants';
import { ClinicHistoryDetailComponent } from '../pages/clinic-history-detail/clinic-history-detail.component';
import { ClinicHistoryDetailCreateComponent } from '../pages/clinic-history-detail-create/clinic-history-detail-create.component';
import { ClinicHistoryDetailEditComponent } from '../pages/clinic-history-detail-edit/clinic-history-detail-edit.component';
import { Routes } from '@angular/router';

export const clinicHistoryRoutes: Routes = [
  {
    path: CLINIC_HISTORY_ROUTES.DETAIL,
    component: ClinicHistoryDetailComponent,
  },
  {
    path: CLINIC_HISTORY_ROUTES.DETAIL_CREATE,
    component: ClinicHistoryDetailCreateComponent,
  },
  {
    path: CLINIC_HISTORY_ROUTES.DETAIL_EDIT,
    component: ClinicHistoryDetailEditComponent,
  },
];
