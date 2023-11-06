import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { ESTABLISHMENT_IMPL } from './core/interfaces/services';
import { AlertComponent } from './modules/commons/alert/alert.component';

@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'lasanha-db'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [
    { provide: ESTABLISHMENT_IMPL, useClass: environment.dependencies.establishmentService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
