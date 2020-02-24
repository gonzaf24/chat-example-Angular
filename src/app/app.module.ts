import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; //configuracion de firebase
import { AngularFireModule } from 'angularfire2'; //configuracion de firebase
import { AngularFireAuthModule } from 'angularfire2/auth'; //configuracion de firebase
import { AngularFireStorageModule } from 'angularfire2/storage'; //configuracion de firebase
import { AngularFirestoreModule } from 'angularfire2/firestore'; //configuracion de firebase
import { AngularFireDatabaseModule } from 'angularfire2/database'; //configuracion de firebase
import { AuthenticationGuard } from './services/authentication.guard';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { SolicitudesAmistadComponent } from './modales/solicitudes-amistad/solicitudes-amistad.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'conversation/:uid', component: ConversationComponent , canActivate: [AuthenticationGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe,
    SolicitudesAmistadComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //configuracion de firebase
    AngularFireAuthModule, //configuracion de firebase
    AngularFireStorageModule, //configuracion de firebase
    AngularFireDatabaseModule, //configuracion de firebase
    ImageCropperModule, //componente para modifcar imagenes
    NgbModule,
    BootstrapModalModule.forRoot({container:document.body}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SolicitudesAmistadComponent]
})
export class AppModule { }
