import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { QualificationComponent } from './qualification/qualification.component';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), AppRoutingModule],
      // You can also include the component declarations here if needed.
    }).compileComponents();
  });

  it('should have routes for all components', () => {
    const appRoutingModule = TestBed.inject(AppRoutingModule);
    const routes = appRoutingModule.routes;

    expect(routes).toContain({ path: '', component: LoginComponent });
    expect(routes).toContain({ path: 'home', component: HomeComponent });
    expect(routes).toContain({ path: 'profile', component: ProfileComponent });
    expect(routes).toContain({ path: 'logout', component: LogoutComponent });
    expect(routes).toContain({ path: 'skills', component: SkillsComponent });
    expect(routes).toContain({ path: 'projects', component: ProjectsComponent });
    expect(routes).toContain({ path: 'qualification', component: QualificationComponent });
    expect(routes).toContain({ path: '**', redirectTo: '/login' });
  });

  // Add more test cases as needed
});
