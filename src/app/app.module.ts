import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './apps/user/user.component';
import { UserCreateComponent } from './apps/user/componentes/user-create/user-create.component';
import { ToastController } from './helpers/toast-controller';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserComponent,
    UserCreateComponent,
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
