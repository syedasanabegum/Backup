import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to projects', () => {
    spyOn(component['router'], 'navigate');
    component.project();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/projects']);
  });

  it('should navigate to skills', () => {
    spyOn(component['router'], 'navigate');
    component.skills();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/skills']);
  });

  it('should navigate to logout', () => {
    spyOn(component['router'], 'navigate');
    component.Logout();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/logout']);
  });

  
});
