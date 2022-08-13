import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './apps/user/user.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
