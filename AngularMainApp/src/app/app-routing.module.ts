import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component'; 
import {SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { QualificationComponent } from './qualification/qualification.component';
import { AuthGuard } from './auth.guard';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import { SearchComponent } from './search/search.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
 { path: 'logout', component:LogoutComponent,  },
  { path: 'home', component: HomeComponent, },
  {path:'table',component:EmployeeListComponent},
  { path: 'profile', component: ProfileComponent,  },
  { path: 'skills', component:SkillsComponent, },
  { path: 'projects', component:ProjectsComponent,},
  { path: 'qualification', component:QualificationComponent,},// canActivate: [AuthGuard]
  { path:'promise', component:SearchComponent},
  {path:'observable', component:ObservableComponent},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
