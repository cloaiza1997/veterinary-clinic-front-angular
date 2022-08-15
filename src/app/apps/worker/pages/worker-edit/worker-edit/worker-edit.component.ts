import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from '../../../models/worker';
import { WORKER_ROUTES, WORKER_URL } from '../../../constants/worker.constants';

/**
 * Formulario de edición de colaborador
 */
@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.scss'],
})
export class WorkerEditComponent implements OnInit {
  documentTypes = DOCUMENT_TYPES;

  skeleton = true;
  loading = false;

  worker: Worker;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.worker = new Worker();
  }

  ngOnInit() {
    const workerId = this.route.snapshot.params['workerId'];

    this.getWorker(workerId);
  }

  getWorker(workerId: any) {
    this.skeleton = true;

    this.http
      .get<ResponseType<{ worker: Worker }>>(
        getApiUrl(WORKER_URL, { workerId })
      )
      .subscribe({
        next: (response) => {
          this.worker = new Worker(response.body?.worker);
          this.skeleton = false;
        },
        error: ({ error }) => {
          this.toast.showErrorResponse(error);
          this.skeleton = false;

          this.router.navigateByUrl(WORKER_ROUTES.HOME);
        },
      });
  }

  onUpdateWorker() {
    this.loading = true;

    this.http
      .put<ResponseType<any>>(
        getApiUrl(WORKER_URL, { workerId: this.worker.id }),
        this.worker
      )
      .subscribe({
        next: (response) => {
          if (response.status) {
            this.toast.showSuccess(response.message);
            this.router.navigateByUrl(WORKER_ROUTES.HOME);
          } else {
            this.toast.showErrorResponse(response);
          }

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
