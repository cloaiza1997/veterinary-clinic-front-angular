import { Component, OnInit } from '@angular/core';
import { getUrl } from 'src/app/utils/utils';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { ResponseType } from 'src/app/types/response';
import { User } from 'src/app/models/user';
import { USER_URL } from 'src/app/utils/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  skeleton: boolean = true;
  loading: boolean = false;

  constructor(private http: HttpClient, private toast: NgToastService) {}

  ngOnInit() {
    this.http
      .get<ResponseType<{ users: User[] }>>(getUrl(USER_URL))
      .subscribe((response) => {
        this.userList = response.body?.users || [];
        this.skeleton = false;
      });
  }

  onDeleteUser(userId: number | null) {
    this.loading = true;

    this.http
      .delete<ResponseType<any>>(getUrl(USER_URL, { userId }))
      .subscribe({
        next: () => {
          const index = this.userList.findIndex((user) => user.id === userId);

          this.userList.splice(index, 1);

          this.loading = false;
        },
        error: ({ error }: { error: ResponseType<any> }) => {
          this.loading = false;

          this.toast.error({
            detail: 'Error al eliminar el usuario',
            summary: error.message,
          });
        },
      });
  }
}
