import {
  PET_LIST_URL,
  PET_ROUTES,
  PET_URL,
} from '../../constants/pet.constants';
import {
  CLINIC_HISTORY_ROUTES,
  CLINIC_HISTORY_URL,
} from 'src/app/apps/clinic-history/constants/clinic-history.constants';
import { Component, OnInit } from '@angular/core';
import { getApiUrl, getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../models/pet';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { USER_ROUTES } from 'src/app/apps/user/constants/user.constants';

/**
 * Listado de gestión de mascotas
 */
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent implements OnInit {
  skeleton: boolean = true;
  loading: boolean = false;

  petList: Pet[] = [];

  petCreateRoute = '/' + PET_ROUTES.CREATE;

  constructor(private http: HttpClient, private toast: ToastController) {}

  ngOnInit() {
    this.getPetList();
  }

  getPetList() {
    this.skeleton = true;

    this.http
      .get<ResponseType<{ pets: Pet[] }>>(getApiUrl(PET_LIST_URL))
      .subscribe({
        next: (response) => {
          this.petList = response.body?.pets || [];
          this.skeleton = false;
        },
        error: ({ error }) => {
          this.toast.showErrorResponse(error);
          this.skeleton = false;
        },
      });
  }

  getUrlEditPet(petId: any) {
    return '/' + getUrl(PET_ROUTES.EDIT, { petId });
  }

  getUrlEditClinicHistory(clinicHistoryId: any) {
    return '/' + getUrl(CLINIC_HISTORY_ROUTES.DETAIL, { clinicHistoryId });
  }

  getUrlEditUser(userId: any) {
    return '/' + getUrl(USER_ROUTES.EDIT, { userId });
  }

  /**
   * Elimina una mascota junto con su historia clínica
   */
  onDeletePet(petId: any) {
    this.loading = true;

    const { clinicHistoryId } =
      this.petList.find((pet) => pet.id === petId) || {};

    // Elimina historia clínica
    this.http
      .delete<ResponseType<any>>(
        getApiUrl(CLINIC_HISTORY_URL, { clinicHistoryId })
      )
      .subscribe({
        next: (responseClinicHistory) => {
          // Elimina mascota
          this.http
            .delete<ResponseType<any>>(getApiUrl(PET_URL, { petId }))
            .subscribe({
              next: (responsePet) => {
                const index = this.petList.findIndex(
                  (worker) => worker.id === petId
                );

                this.petList.splice(index, 1);
                this.toast.showSuccess(
                  `${responsePet.message} - ${responseClinicHistory.message}`
                );

                this.loading = false;
              },
              error: ({ error }: { error: ResponseType<any> }) => {
                this.toast.showErrorResponse(error);
                this.loading = false;
              },
            });
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
