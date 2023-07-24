import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component'; 
import {SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { QualificationComponent } from './qualification/qualification.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';

//import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logout', component:LogoutComponent},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'skills', component:SkillsComponent},
  { path: 'projects', component:ProjectsComponent},
  { path: 'qualification', component:QualificationComponent},
  {path:'table',component:EmployeeListComponent},
  { path: '**', redirectTo: '/login' } 
];

const mockRoutes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(mockRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    routes: any;
  config: any;
}
