import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultMovieScriptComponent } from './pages/consult-movie-script/consult-movie-script.component';
import { HomeComponent } from './pages/home/home.component';
import { ListMovieScriptComponent } from './pages/list-movie-script/list-movie-script.component';
import { LoginComponent } from './pages/login/login.component';
import { SendMovieScriptComponent } from './pages/send-movie-script/send-movie-script.component';
import { AuthGuard } from './services/permission.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'enviar-roteiro',
    component: SendMovieScriptComponent,
  },
  {
    path: 'consulta-de-roteiro',
    component: ConsultMovieScriptComponent,
  },
  {
    path: 'lista-de-roteiros',
    component: ListMovieScriptComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
