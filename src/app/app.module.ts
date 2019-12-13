import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule }  from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/messaging.service';

const firebase = {
  apiKey: "AIzaSyChkRUNFkkMzqK_T0fxDArQlfrnnmyuwPA",
  authDomain: "platzinotas-c49d3.firebaseapp.com",
  databaseURL: "https://platzinotas-c49d3.firebaseio.com",
  projectId: "platzinotas-c49d3",
  storageBucket: "platzinotas-c49d3.appspot.com",
  messagingSenderId: "958525827410",
  appId: "1:958525827410:web:3d676bfd7a39c4e147f28b",
  measurementId: "G-KM36MTQ7V9"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [NotesService, 
    AuthService,
    MessagingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
