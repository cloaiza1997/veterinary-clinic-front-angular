import { Component, OnInit } from '@angular/core';
import { getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { ResponseType } from 'src/app/types/response';
import { ToastController } from 'src/app/helpers/toast-controller';
import { User } from 'src/app/models/user';
import { USER_ROUTES, USER_URL } from 'src/app/utils/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  skeleton: boolean = true;
  loading: boolean = false;
  userCreateRoute = '/' + USER_ROUTES.CREATE;

  constructor(private http: HttpClient, private toast: ToastController) {}

  ngOnInit() {
    this.http
      .get<ResponseType<{ users: User[] }>>(getUrl(USER_URL))
      .subscribe((response) => {
        this.userList = response.body?.users || [];
        this.skeleton = false;
      });
  }

  onDeleteUser(userId: any) {
    this.loading = true;

    this.http
      .delete<ResponseType<any>>(getUrl(USER_URL, { userId }))
      .subscribe({
        next: (response) => {
          if (response.status) {
            const index = this.userList.findIndex((user) => user.id === userId);

            this.userList.splice(index, 1);
            this.toast.showSuccess(response.message);
          }

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.loading = false;

          this.toast.showErrorResponse(error);
        },
      });
  }
}
