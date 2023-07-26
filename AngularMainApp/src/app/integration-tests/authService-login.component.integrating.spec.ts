import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('Integration Between Login and Authservice', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [AuthService], 
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); 
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
  });
  
  

  

});
