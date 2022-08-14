import { Component, OnInit } from '@angular/core';
import { DOCUMENT_TYPES, GENDER_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { Router } from '@angular/router';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from '../../models/user';
import { USER_ROUTES, USER_URL } from '../../constants/user.constants';

/**
 * Formulario de creación de usuarios
 */
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  documentTypes = DOCUMENT_TYPES;
  genderTypes = GENDER_TYPES;
  loading = false;

  user: User;

  constructor(
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {}

  onCreateUser() {
    this.loading = true;

    this.http
      .post<ResponseType<any>>(getApiUrl(USER_URL), this.user)
      .subscribe({
        next: (response) => {
          if (response.status) {
            this.toast.showSuccess(response.message);
            this.router.navigateByUrl(USER_ROUTES.HOME);
          } else {
            this.toast.showErrorResponse(response);
          }

          this.loading = true;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = true;
        },
      });
  }
}
