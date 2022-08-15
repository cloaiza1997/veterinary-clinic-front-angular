import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { ClinicHistoryDetailComponent } from './apps/clinic-history/pages/clinic-history-detail/clinic-history-detail.component';
import { ClinicHistoryDetailCreateComponent } from './apps/clinic-history/pages/clinic-history-detail-create/clinic-history-detail-create.component';
import { ClinicHistoryDetailEditComponent } from './apps/clinic-history/pages/clinic-history-detail-edit/clinic-history-detail-edit.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PetCreateComponent } from './apps/pets/pages/pet-create/pet-create.component';
import { PetEditComponent } from './apps/pets/pages/pet-edit/pet-edit.component';
import { PetListComponent } from './apps/pets/pages/pet-list/pet-list.component';
import { ToastController } from './helpers/toast-controller';
import { UserCreateComponent } from './apps/user/pages/user-create/user-create.component';
import { UserEditComponent } from './apps/user/pages/user-edit/user-edit.component';
import { UserListComponent } from './apps/user/pages/user-list/user-list.component';
import { WorkerCreateComponent } from './apps/worker/pages/worker-create/worker-create.component';
import { WorkerEditComponent } from './apps/worker/pages/worker-edit/worker-edit/worker-edit.component';
import { WorkerListComponent } from './apps/worker/pages/worker-list/worker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonDirective,
    ClinicHistoryDetailComponent,
    ClinicHistoryDetailCreateComponent,
    ClinicHistoryDetailEditComponent,
    LoaderComponent,
    NavigationComponent,
    PetCreateComponent,
    PetEditComponent,
    PetListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    WorkerCreateComponent,
    WorkerEditComponent,
    WorkerListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [ToastController],
  bootstrap: [AppComponent],
})
export class AppModule {}
