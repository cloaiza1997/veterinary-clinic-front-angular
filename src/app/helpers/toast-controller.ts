import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ResponseType } from '../types/response';

@Injectable()
export class ToastController {
  constructor(private toast: NgToastService) {}

  showErrorResponse(response: ResponseType<any>) {
    if (response.message || response.formError.length > 0) {
      this.toast.error({ detail: response.message, summary: '' });
    }
  }

  showSuccess(message: string) {
    this.toast.success({ detail: message });
  }
}
