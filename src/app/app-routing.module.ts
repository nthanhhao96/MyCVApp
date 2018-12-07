import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/firebase/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tabs', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: './home/home.module#HomePageModule' },
  { path: 'projects', canActivate: [AuthGuardService], loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'cv', canActivate: [AuthGuardService], loadChildren: './cv/cv.module#CvPageModule' },
  { path: 'curriculum', canActivate: [AuthGuardService], loadChildren: './curriculum/curriculum.module#CurriculumPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// Hao Nguyen - 1601800
