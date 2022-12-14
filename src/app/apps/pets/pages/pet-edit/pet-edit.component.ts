import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GENDER_PET_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../../models/pet';
import { PET_ROUTES, PET_URL } from '../../constants/pet.constants';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from 'src/app/apps/user/models/user';
import { USER_URL } from 'src/app/apps/user/constants/user.constants';

/**
 * Formulario de edición de una mascota
 */
@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss'],
})
export class PetEditComponent implements OnInit {
  genderTypes = GENDER_PET_TYPES;

  loading = false;
  skeleton = true;

  pet: Pet;
  userList: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.pet = new Pet();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.skeleton = true;

    const petId = this.route.snapshot.params['petId'];

    forkJoin([
      this.http.get<ResponseType<{ pet: Pet }>>(getApiUrl(PET_URL, { petId })),
      this.http.get<ResponseType<{ users: User[] }>>(getApiUrl(USER_URL)),
    ]).subscribe({
      next: ([responsePet, responseUser]) => {
        this.pet = new Pet(responsePet.body?.pet);
        this.userList =
          responseUser.body?.users?.filter((user) => !!user.status) || [];

        this.skeleton = false;
      },
      error: ({ error }) => {
        this.toast.showErrorResponse(error);
        this.skeleton = false;

        this.router.navigateByUrl(PET_ROUTES.HOME);
      },
    });
  }

  onUpdatePet() {
    this.loading = true;

    this.http
      .put<ResponseType<any>>(
        getApiUrl(PET_URL, { petId: this.pet.id }),
        this.pet
      )
      .subscribe({
        next: (response) => {
          this.toast.showSuccess(response.message);
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
