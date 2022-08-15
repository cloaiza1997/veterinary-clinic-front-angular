import { Component, OnInit } from '@angular/core';
import { getApiUrl, getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from '../../models/worker';
import { WORKER_ROUTES, WORKER_URL } from '../../constants/worker.constants';

/**
 * Listado para gestión de colaboradores
 */
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
})
export class WorkerListComponent implements OnInit {
  skeleton: boolean = true;
  loading: boolean = false;

  workerList: Worker[] = [];

  workerCreateRoute = '/' + WORKER_ROUTES.CREATE;

  constructor(private http: HttpClient, private toast: ToastController) {}

  ngOnInit() {
    this.getWorkerList();
  }

  getUrlEditWorker(workerId: any) {
    return '/' + getUrl(WORKER_ROUTES.EDIT, { workerId });
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

  onDeleteWorker(workerId: any) {
    this.loading = true;

    this.http
      .delete<ResponseType<any>>(getApiUrl(WORKER_URL, { workerId }))
      .subscribe({
        next: (response) => {
          const index = this.workerList.findIndex(
            (worker) => worker.id === workerId
          );

          this.workerList.splice(index, 1);
          this.toast.showSuccess(response.message);

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
