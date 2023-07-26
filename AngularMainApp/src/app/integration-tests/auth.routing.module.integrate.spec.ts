import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';

describe('AppRoutingModule', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    await router.initialNavigation(); // Wait for initial navigation to complete
  });

it('should navigate to the home component when /home route is requested', async () => {
    await router.navigate(['/home']);
    expect(router.url).toBe('/home');
    fixture.detectChanges();

    const homeComponent = fixture.debugElement.nativeElement;
    expect(homeComponent.querySelector('h2').textContent).toContain('Home'); 
  });
  it('should navigate to the login component for the default route', () => {
    expect(router.url).toBe('/login');
    const loginComponent = fixture.debugElement.query(By.directive(LoginComponent));
   // expect(loginComponent).toBeTruthy();
  });
  
});
