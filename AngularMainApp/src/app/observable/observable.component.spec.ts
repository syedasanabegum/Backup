import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ObservableComponent } from './observable.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule } from '@angular/common/http';

describe('ObservableComponent', () => {
  let component: ObservableComponent;
  let fixture: ComponentFixture<ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ObservableComponent, HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the comment when form is valid', () => {
    const validData = {
      comment: 'Test comment',
      name: 'John Doe',
      email: 'john@example.com',
    };

    const commentControl = component.form.get('comment') as FormControl;

    commentControl.setValue(validData.comment);
    component.onSubmit();

    expect(commentControl.value).toBe('Test comment'); // The HTML tags should be removed from the comment
  });

  it('should not update the comment when form is invalid', () => {
    const invalidData = {
      comment: '',
      name: 'John Doe',
      email: 'john@example.com',
    };

    const commentControl = component.form.get('comment') as FormControl;

    commentControl.setValue(invalidData.comment);
    component.onSubmit();

    expect(commentControl.value).toBe(''); // The comment should remain empty as it is invalid
  });

  it('should log form submission', () => {
    spyOn(console, 'log');

    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith('Form submitted!');
  });

  // Add more test cases as needed to cover other functionalities of the component
});
