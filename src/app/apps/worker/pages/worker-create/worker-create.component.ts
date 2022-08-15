import { Component, OnInit } from '@angular/core';
import { DOCUMENT_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { Router } from '@angular/router';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from '../../models/worker';
import { WORKER_ROUTES, WORKER_URL } from '../../constants/worker.constants';

/**
 * Formulario de creación de colaborador
 */
@Component({
  selector: 'app-worker-create',
  templateUrl: './worker-create.component.html',
  styleUrls: ['./worker-create.component.scss'],
})
export class WorkerCreateComponent implements OnInit {
  documentTypes = DOCUMENT_TYPES;

  loading = false;

  worker: Worker;

  constructor(
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.worker = new Worker();
  }

  ngOnInit() {}

  onCreateWorker() {
    this.loading = true;

    this.http
      .post<ResponseType<any>>(getApiUrl(WORKER_URL), this.worker)
      .subscribe({
        next: (response) => {
          this.toast.showSuccess(response.message);
          this.router.navigateByUrl(WORKER_ROUTES.HOME);

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
