import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule,HttpClientModule ],
    }).compileComponents();
    
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the Router service
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the correct router links for each navigation item', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('nav a');
    // Check each router link
    expect(navLinks[0].getAttribute('routerLink')).toBe('/login');
    expect(navLinks[1].getAttribute('routerLink')).toBe('/home');
    expect(navLinks[2].getAttribute('routerLink')).toBe('/qualification');
    expect(navLinks[3].getAttribute('routerLink')).toBe('/skills');
    expect(navLinks[4].getAttribute('routerLink')).toBe('/projects');
    expect(navLinks[5].getAttribute('routerLink')).toBe('/table');
    expect(navLinks[6].getAttribute('routerLink')).toBe('/promise');
    expect(navLinks[7].getAttribute('routerLink')).toBe('/observable');
    //expect(navLinks[8].getAttribute('routerLink')).toBe('/logout');
  });
  it('should navigate to the correct route when a navigation item is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    // Call the method directly to trigger navigation
    component.navigateToQualification();

    // Check if the router.navigate method is called with the correct route
    expect(navigateSpy).toHaveBeenCalledWith(['/qualification']);
  });
  
});
