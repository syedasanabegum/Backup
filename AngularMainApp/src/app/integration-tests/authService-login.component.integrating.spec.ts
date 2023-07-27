import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AppModule } from '../app.module';

describe('Integration Between Login and Authservice', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;
 
 
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule, AppModule],
      providers: [AuthService], 
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); 
    router = TestBed.inject(Router);
    
    fixture.detectChanges();
  });
  
  
  it('should call login method of AuthService when "Login" button is clicked', () => {
    const mockResponse = { token: 'mockToken', success: true };
    
    const authServiceSpy = spyOn(authService, 'login').and.returnValue(of(mockResponse));
  
    // Set values for username and password inputs
    component.username = 'testuser';
    component.password = 'testpassword';
    fixture.detectChanges();
  
    // Trigger the "Login" button click
    const loginButton = fixture.debugElement.query(By.css('.Add'));
    loginButton.nativeElement.click();
  
    // Expect the login method of AuthService to have been called
    expect(authServiceSpy).toHaveBeenCalled();
    expect( authService.isAuthenticatedUser).toBeTruthy;
    const Logout = authService.logout();
    expect(Logout).toBeFalsy;
  });
  
  it('should navigate to the home component when /home route is requested', async () => {
    await router.navigate(['/home']);
    expect(router.url).toBe('/home');
  });
  it('should navigate to the login component for the default route', async () => {
    await router.navigate(['']);
    expect(router.url).toBe('/login');
  });
  it('should redirect to login page if the user is unauthorized', async () => {
    // Simulate the user being unauthorized by setting isAuthenticatedUser to false
    authService.isAuthenticatedUser = false;
    authService.logout();
    // Detect changes to trigger ngOnInit
    fixture.detectChanges();


    // Wait for the navigation to complete
    await fixture.whenStable();

    // Expect that the user is redirected to the login page (expecting '/login' in the URL)
    expect(router.url).toBe('/login');
  });  
 /*
  it('should call login method of AuthService when "Login" button is clicked', () => {
    const mockResponse = { token: 'mockToken', success: true };

    const authServiceSpy = spyOn(authService, 'login').and.returnValue(of(mockResponse));

    // Set values for username and password inputs
    component.username = 'testuser';
    component.password = 'testpassword';
    fixture.detectChanges();

    // Trigger the "Login" button click
    const loginButton = fixture.debugElement.query(By.css('.Add'));
    loginButton.nativeElement.click();

    // Expect the login method of AuthService to have been called
    expect(authServiceSpy).toHaveBeenCalled();
// Now, use HttpTestingController to mock the HTTP request and respond with the mockResponse
const req = httpMock.expectOne('https://dummyjson.com/auth/login');
expect(req.request.method).toBe('POST');
expect(req.request.body).toEqual({ username: 'testuser', password: 'testpassword' });

// Respond with the mock response
req.flush(mockResponse);

// Expect the authService to set isAuthenticatedUser to true
expect(authService.isAuthenticatedUser).toBeTruthy();
});*/
});
