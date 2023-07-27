import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

describe('Integration Between Login and Authservice', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;
    let router: Router;
    let httpMock: HttpTestingController;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule],
        providers: [AuthService],
      }).compileComponents();
    }));beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        httpMock = TestBed.inject(HttpTestingController); // Get the HttpTestingController instance
        fixture.detectChanges();
      });
    
      afterEach(() => {
        // Verify that there are no outstanding HTTP requests after each test
        httpMock.verify();
      });
      
      it('should retrieve the token upon successful login', () => {
        const dummyResponse = { token: 'dummy_token' };
        const username = 'kminchelle';
        const password = '0lelplR';
    
        authService.login(username, password).subscribe((response: any) => {
          expect(response.token).toBe(dummyResponse.token);
        });
    
        const req = httpMock.expectOne('https://dummyjson.com/auth/login');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual({ username, password });
    
        req.flush(dummyResponse);
      });
      
      // ... other test cases ...
    });
    
    
    
    
