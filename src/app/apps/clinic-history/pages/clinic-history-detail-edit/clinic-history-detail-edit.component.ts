import { ActivatedRoute, Router } from '@angular/router';
import { CLINIC_HISTORY_DETAIL_URL } from '../../constants/clinic-history.constants';
import { ClinicHistoryDetail } from '../../models/clinic-history-detail';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { PET_ROUTES } from 'src/app/apps/pets/constants/pet.constants';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from 'src/app/apps/worker/models/worker';
import { WORKER_URL } from 'src/app/apps/worker/constants/worker.constants';

/**
 * Formulario de edición del detalle de una historia clínica
 */
@Component({
  selector: 'app-clinic-history-detail-edit',
  templateUrl: './clinic-history-detail-edit.component.html',
  styleUrls: ['./clinic-history-detail-edit.component.scss'],
})
export class ClinicHistoryDetailEditComponent implements OnInit {
  skeleton = true;
  loading = false;

  clinicHistoryDetail: ClinicHistoryDetail;
  workerList: Worker[] = [];

  constructor(
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastController
  ) {
    this.clinicHistoryDetail = new ClinicHistoryDetail();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.skeleton = true;

    const clinicHistoryDetailId =
      this.route.snapshot.params['clinicHistoryDetailId'];

    forkJoin([
      this.http.get<ResponseType<{ clinicHistoryDetail: ClinicHistoryDetail }>>(
        getApiUrl(CLINIC_HISTORY_DETAIL_URL, { clinicHistoryDetailId })
      ),
      this.http.get<ResponseType<{ workers: Worker[] }>>(getApiUrl(WORKER_URL)),
    ]).subscribe({
      next: ([responseDetail, responseWorkers]) => {
        this.clinicHistoryDetail = new ClinicHistoryDetail(
          responseDetail.body?.clinicHistoryDetail
        );
        this.workerList = responseWorkers.body?.workers || [];
        this.skeleton = false;
      },
      error: ({ error }) => {
        this.toast.showErrorResponse(error);
        this.skeleton = false;

        this.router.navigateByUrl(PET_ROUTES.HOME);
      },
    });
  }

  onUpdateDetail() {
    this.loading = true;

    this.http
      .put<ResponseType<any>>(
        getApiUrl(CLINIC_HISTORY_DETAIL_URL, {
          clinicHistoryDetailId: this.clinicHistoryDetail.id,
        }),
        this.clinicHistoryDetail
      )
      .subscribe({
        next: (response) => {
          this.toast.showSuccess(response.message);
          this.location.back();

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
