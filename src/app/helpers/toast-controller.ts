import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ResponseType } from '../types/types';

/**
 * Funciones para mostrar toast
 */
@Injectable()
export class ToastController {
  constructor(private toast: NgToastService) {}

  showErrorResponse(response: ResponseType<any>) {
    const { error, message, formError } = response;

    if (error || message || formError.length > 0) {
      let summary = '';
      let duration = 5000;

      if (formError) {
        formError.forEach((error) => {
          summary += `• ${error.defaultMessage} `;
          duration += 1000;
        });
      }

      this.toast.error({ detail: error || message, summary, duration });
    }
  }

  showSuccess(message: string) {
    this.toast.success({ detail: message });
  }
}
