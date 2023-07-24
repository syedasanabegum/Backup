import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [RouterTestingModule], // Import the RouterTestingModule here to provide the 'router-outlet'.
      // You can also add any additional modules like 'FormsModule', 'HttpClientModule', etc. if needed.
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render the router-outlet', () => {
    const routerOutletElement = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutletElement).toBeTruthy();
  });
});
