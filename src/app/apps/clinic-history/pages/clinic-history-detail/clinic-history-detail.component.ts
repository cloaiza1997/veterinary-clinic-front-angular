import {
  CLINIC_HISTORY_DETAIL_GROUP_URL,
  CLINIC_HISTORY_DETAIL_URL,
  CLINIC_HISTORY_ROUTES,
  CLINIC_HISTORY_URL,
} from '../../constants/clinic-history.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicHistory } from '../../models/clinic-history';
import { ClinicHistoryDetail } from '../../models/clinic-history-detail';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { getApiUrl, getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { MomentDate } from 'src/app/utils/date';
import { PET_ROUTES } from 'src/app/apps/pets/constants/pet.constants';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { WORKER_ROUTES } from 'src/app/apps/worker/constants/worker.constants';

/**
 * Listado del detalle de una historia clínica
 */
@Component({
  selector: 'app-clinic-history-detail',
  templateUrl: './clinic-history-detail.component.html',
  styleUrls: ['./clinic-history-detail.component.scss'],
})
export class ClinicHistoryDetailComponent extends MomentDate implements OnInit {
  loading = false;
  skeleton = true;

  clinicHistory: ClinicHistory;
  clinicHistoryDetailList: ClinicHistoryDetail[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    super();
    this.clinicHistory = new ClinicHistory();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.skeleton = true;

    const clinicHistoryId = this.route.snapshot.params['clinicHistoryId'];

    forkJoin([
      this.http.get<ResponseType<{ clinicHistory: ClinicHistory }>>(
        getApiUrl(CLINIC_HISTORY_URL, { clinicHistoryId })
      ),
      this.http.get<
        ResponseType<{ clinicHistoryDetails: ClinicHistoryDetail[] }>
      >(getApiUrl(CLINIC_HISTORY_DETAIL_GROUP_URL, { clinicHistoryId })),
    ]).subscribe({
      next: ([responseClinicHistory, responseDetail]) => {
        this.clinicHistory = new ClinicHistory(
          responseClinicHistory.body?.clinicHistory
        );

        this.clinicHistoryDetailList =
          responseDetail.body?.clinicHistoryDetails || [];

        this.skeleton = false;
      },
      error: ({ error }) => {
        this.toast.showErrorResponse(error);
        this.router.navigateByUrl(PET_ROUTES.HOME);
        this.skeleton = false;
      },
    });
  }

  getUrlEditPet(petId: any) {
    return '/' + getUrl(PET_ROUTES.EDIT, { petId });
  }

  getUrlEditWorker(workerId: any) {
    return '/' + getUrl(WORKER_ROUTES.EDIT, { workerId });
  }

  getUrlCreateDetail(clinicHistoryId: any) {
    return (
      '/' + getUrl(CLINIC_HISTORY_ROUTES.DETAIL_CREATE, { clinicHistoryId })
    );
  }

  getUrlEditDetail(clinicHistoryDetailId: any) {
    return (
      '/' + getUrl(CLINIC_HISTORY_ROUTES.DETAIL_EDIT, { clinicHistoryDetailId })
    );
  }

  onDeleteDetail(clinicHistoryDetailId: any) {
    this.loading = true;

    this.http
      .delete<ResponseType<any>>(
        getApiUrl(CLINIC_HISTORY_DETAIL_URL, { clinicHistoryDetailId })
      )
      .subscribe({
        next: (response) => {
          const index = this.clinicHistoryDetailList.findIndex(
            (worker) => worker.id === clinicHistoryDetailId
          );

          this.clinicHistoryDetailList.splice(index, 1);
          this.toast.showSuccess(response.message);

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.loading = false;

          this.toast.showErrorResponse(error);
        },
      });
  }
}
