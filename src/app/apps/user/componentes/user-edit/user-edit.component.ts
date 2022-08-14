import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT_TYPES, GENDER_TYPES } from 'src/app/utils/constants';
import { getApiUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from '../../models/user';
import { USER_ROUTES, USER_URL } from '../../constants/user.constants';

/**
 * Formulario de edición de usuarios
 */
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  documentTypes = DOCUMENT_TYPES;
  genderTypes = GENDER_TYPES;
  loading = false;

  user: User;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toast: ToastController,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit() {
    const userId = this.route.snapshot.params['userId'];

    this.http
      .get<ResponseType<{ user: User }>>(getApiUrl(USER_URL, { userId }))
      .subscribe({
        next: (response) => {
          if (response.status) {
            this.user = new User(response.body?.user);
          } else {
            this.toast.showErrorResponse(response);
            this.router.navigateByUrl(USER_ROUTES.HOME);
          }
        },
        error: ({ error }) => {
          this.toast.showErrorResponse(error);
          this.router.navigateByUrl(USER_ROUTES.HOME);
        },
      });
  }

  onUpdateUser() {
    this.loading = true;

    this.http
      .put<ResponseType<any>>(
        getApiUrl(USER_URL, { userId: this.user.id }),
        this.user
      )
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
