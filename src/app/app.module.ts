import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToastController } from './helpers/toast-controller';
import { UserComponent } from './apps/user/user.component';
import { UserCreateComponent } from './apps/user/componentes/user-create/user-create.component';
import { UserEditComponent } from './apps/user/componentes/user-edit/user-edit.component';
import { WorkerComponent } from './apps/user/worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserComponent,
    UserCreateComponent,
    UserEditComponent,
    BackButtonDirective,
    WorkerComponent,
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
