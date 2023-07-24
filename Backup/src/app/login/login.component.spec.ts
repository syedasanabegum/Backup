import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpClient: HttpClientModule;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, HttpClientModule],
        declarations: [LoginComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate'); // Spy on the router.navigate method
    fixture.detectChanges();
  });

  afterEach(() => {
    // Ensure there are no outstanding HTTP requests
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call http.post with correct data and navigate to /home', fakeAsync(() => {
    const testUsername = 'kminchelle';
    const testPassword = '0lelplR';

    // Set the input values
    component.signupUsername = testUsername;
    component.signupPassword = testPassword;

    // Call the signup() method
    component.signup();
    tick(); // Ensure any async tasks are completed

    // Expect that the http.post method was called with the correct data
    const req = httpTestingController.expectOne('https://dummyjson.com/auth/login');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ username: testUsername, password: testPassword });

    // Mock the server response
    const mockResponse = { message: 'User logged in successfully' };
    req.flush(mockResponse);

    // Expect that the navigate method was called with the correct route
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }));
});
