import { Component, OnInit } from '@angular/core';
import { GENDER_PET_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../models/pet';
import { PET_ROUTES, PET_URL } from '../../constants/pet.constants';
import { ResponseType } from 'src/app/types/types';
import { Router } from '@angular/router';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from 'src/app/apps/user/models/user';
import { USER_URL } from 'src/app/apps/user/constants/user.constants';
import { CLINIC_HISTORY_URL } from 'src/app/apps/clinic-history/constants/clinic-history.constants';
import { ClinicHistory } from 'src/app/apps/clinic-history/models/clinic-history';

/**
 * Formulario de creación de mascotas
 */
@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
})
export class PetCreateComponent implements OnInit {
  genderTypes = GENDER_PET_TYPES;

  skeleton = true;
  loading = false;

  pet: Pet;
  userList: User[] = [];

  constructor(
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.pet = new Pet();
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.skeleton = true;

    this.http
      .get<ResponseType<{ users: User[] }>>(getApiUrl(USER_URL))
      .subscribe((response) => {
        this.userList =
          response.body?.users?.filter((user) => !!user.status) || [];
        this.skeleton = false;
      });
  }

  /**
   * Crea una nueva mascota junto con su historia clínica
   */
  onCreatePet() {
    this.loading = true;

    this.http
      .post<ResponseType<{ pet: Pet }>>(getApiUrl(PET_URL), this.pet)
      .subscribe({
        next: (response) => {
          this.onCreateClinicHistory(response.body?.pet.id, response.message);
          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }

  onCreateClinicHistory(petId: any, message: string) {
    this.loading = true;

    const clinicHistory = new ClinicHistory({
      petId,
    });

    this.http
      .post<ResponseType<any>>(getApiUrl(CLINIC_HISTORY_URL), clinicHistory)
      .subscribe({
        next: (response) => {
          this.toast.showSuccess(`${message} - ${response.message}`);
          this.loading = false;

          this.router.navigateByUrl(PET_ROUTES.HOME);
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
