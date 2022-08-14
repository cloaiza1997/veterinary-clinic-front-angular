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

  onCreatePet() {
    this.loading = true;

    this.http.post<ResponseType<any>>(getApiUrl(PET_URL), this.pet).subscribe({
      next: (response) => {
        if (response.status) {
          this.toast.showSuccess(response.message);
          this.router.navigateByUrl(PET_ROUTES.HOME);
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
