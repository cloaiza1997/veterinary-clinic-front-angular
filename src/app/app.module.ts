import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToastController } from './helpers/toast-controller';
import { UserComponent } from './apps/user/pages/user-list/user.component';
import { UserCreateComponent } from './apps/user/pages/user-create/user-create.component';
import { UserEditComponent } from './apps/user/pages/user-edit/user-edit.component';
import { WorkerComponent } from './apps/worker/pages/worker-list/worker.component';
import { WorkerCreateComponent } from './apps/worker/pages/worker-create/worker-create.component';
import { WorkerEditComponent } from './apps/worker/pages/worker-edit/worker-edit/worker-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    BackButtonDirective,
    WorkerComponent,
    WorkerCreateComponent,
    WorkerEditComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,
  ],
  providers: [ToastController],
  bootstrap: [AppComponent],
})
export class AppModule {}
