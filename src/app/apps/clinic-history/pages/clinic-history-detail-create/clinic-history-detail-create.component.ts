import { ActivatedRoute, Route, Router } from '@angular/router';
import { CLINIC_HISTORY_DETAIL_URL } from '../../constants/clinic-history.constants';
import { ClinicHistoryDetail } from '../../models/clinic-history-detail';
import { Component, OnInit } from '@angular/core';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from 'src/app/apps/worker/models/worker';
import { WORKER_URL } from 'src/app/apps/worker/constants/worker.constants';

/**
 * Formulario de creación del detalle de una historia clínica
 */
@Component({
  selector: 'app-clinic-history-detail-create',
  templateUrl: './clinic-history-detail-create.component.html',
  styleUrls: ['./clinic-history-detail-create.component.scss'],
})
export class ClinicHistoryDetailCreateComponent implements OnInit {
  skeleton = true;
  loading = false;

  clinicHistoryDetail: ClinicHistoryDetail;
  workerList: Worker[] = [];

  constructor(
    private http: HttpClient,
    private toast: ToastController,
    private route: ActivatedRoute,
    private location: Location
  ) {
    const clinicHistoryId = this.route.snapshot.params['clinicHistoryId'];

    this.clinicHistoryDetail = new ClinicHistoryDetail({ clinicHistoryId });
  }

  ngOnInit() {
    this.getWorkerList();
  }

  getWorkerList() {
    this.skeleton = true;

    this.http
      .get<ResponseType<{ workers: Worker[] }>>(getApiUrl(WORKER_URL))
      .subscribe({
        next: (response) => {
          this.workerList = response.body?.workers || [];
          this.skeleton = false;
        },
        error: ({ error }) => {
          this.toast.showErrorResponse(error);
          this.skeleton = false;
        },
      });
  }

  onCreateDetail() {
    this.loading = true;

    this.http
      .post<ResponseType<any>>(
        getApiUrl(CLINIC_HISTORY_DETAIL_URL),
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
