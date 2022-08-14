import { Component, OnInit } from '@angular/core';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { Router } from '@angular/router';
import { ToastController } from 'src/app/helpers/toast-controller';
import { Worker } from './models/worker';
import { WORKER_ROUTES, WORKER_URL } from './constants/worker.constants';

/**
 * Listado para gestión de colaboradores
 */
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent implements OnInit {
  workerList: Worker[] = [];
  skeleton: boolean = true;
  loading: boolean = false;
  workerCreateRoute = '/' + WORKER_ROUTES.CREATE;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.http
      .get<ResponseType<{ workers: Worker[] }>>(getApiUrl(WORKER_URL))
      .subscribe((response) => {
        this.workerList = response.body?.workers || [];
        this.skeleton = false;
      });
  }

  getUrlEditWorker(userId: any) {
    return '';
  }

  onDeleteWorker(userId: any) {}
}
