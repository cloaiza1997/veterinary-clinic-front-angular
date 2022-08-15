import { Component, OnInit } from '@angular/core';
import { getApiUrl, getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/types';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from '../../models/user';
import { USER_ROUTES, USER_URL } from '../../constants/user.constants';

/**
 * Listado de gestión de usuarios
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  skeleton: boolean = true;
  loading: boolean = false;

  userList: User[] = [];

  userCreateRoute = '/' + USER_ROUTES.CREATE;

  constructor(private http: HttpClient, private toast: ToastController) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.skeleton = true;

    this.http
      .get<ResponseType<{ users: User[] }>>(getApiUrl(USER_URL))
      .subscribe({
        next: (response) => {
          this.userList = response.body?.users || [];
          this.skeleton = false;
        },
        error: ({ error }) => {
          this.toast.showErrorResponse(error);
          this.skeleton = false;
        },
      });
  }

  getUrlEditUser(userId: any) {
    return '/' + getUrl(USER_ROUTES.EDIT, { userId });
  }

  onDeleteUser(userId: any) {
    this.loading = true;

    this.http
      .delete<ResponseType<any>>(getApiUrl(USER_URL, { userId }))
      .subscribe({
        next: (response) => {
          const index = this.userList.findIndex((user) => user.id === userId);

          this.userList.splice(index, 1);
          this.toast.showSuccess(response.message);

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.toast.showErrorResponse(error);
          this.loading = false;
        },
      });
  }
}
