import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from 'src/app/models/user';
import { ResponseType } from 'src/app/types/response';
import {
  DOCUMENT_TYPES,
  GENDER_TYPES,
  USER_ROUTES,
  USER_URL,
} from 'src/app/utils/constants';
import { getUrl } from 'src/app/utils/utils';

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

    this.http.post<ResponseType<any>>(getUrl(USER_URL), this.user).subscribe({
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
