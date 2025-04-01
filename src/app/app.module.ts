import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropMenuComponent } from './components/drop-menu/drop-menu.component';
import { ToastBootstrapComponent } from './components/toast-bootstrap/toast-bootstrap.component';
import { ConsultMovieScriptComponent } from './pages/consult-movie-script/consult-movie-script.component';
import { HomeComponent } from './pages/home/home.component';
import { ListMovieScriptComponent } from './pages/list-movie-script/list-movie-script.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieScriptViewComponent } from './pages/movie-script-view/movie-script-view.component';
import { SendMovieScriptComponent } from './pages/send-movie-script/send-movie-script.component';
import { AuthInterceptor } from 'src/auth.interceptor';
import { PhonePipe } from './utils/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendMovieScriptComponent,
    HomeComponent,
    ToastBootstrapComponent,
    DropMenuComponent,
    ListMovieScriptComponent,
    ConsultMovieScriptComponent,
    MovieScriptViewComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  exports: [
    ToastBootstrapComponent
  ],
  providers: [
    provideNgxMask(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
