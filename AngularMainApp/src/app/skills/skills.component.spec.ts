import { ComponentFixture, TestBed,tick, fakeAsync, waitForAsync  } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SkillsComponent } from './skills.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsComponent, HeaderComponent],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    component.newSkill = { skill: '', percentage: 0 }; // Initialize the newSkill object
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle the form when the "Add Skill" button is clicked', () => {
    expect(component.showForm).toBe(false);

    const addButton = fixture.nativeElement.querySelector('button.Add');
    addButton.click();
    fixture.detectChanges();

    expect(component.showForm).toBe(true);

    addButton.click();
    fixture.detectChanges();

    expect(component.showForm).toBe(false);
  });
  it('should display a message when no skills are added', waitForAsync(() => {
    // starting skills array should be empty
    expect(component.skills.length).toBe(0);

    //"No skills added." message is displayed when skills array is empty
    fixture.detectChanges();
    const messageElement: HTMLElement = fixture.nativeElement.querySelector('.no-skills-message');
    expect(messageElement).not.toBeNull();
    expect(messageElement.textContent).toContain('No skills added.');

   
  }));
  it('should add a new skill to the skills array and reset newSkill properties on addSkill() call', () => {
    component.newSkill.skill = 'Angular';
    component.newSkill.percentage = 90;
    component.addSkill();

    expect(component.skills.length).toBe(1);
    expect(component.skills[0].skill).toBe('Angular');
    expect(component.skills[0].percentage).toBe(90);

    // Verify that newSkill properties are reset
    expect(component.newSkill.skill).toBe('');
    expect(component.newSkill.percentage).toBe(0);
  });
  it('should display skills details on the template when skills array is not empty', () => {
    component.skills = [
      { skill: 'Angular', percentage: 80 },
      { skill: 'TypeScript', percentage: 90 },
    ];
    fixture.detectChanges();

    const skillElements = fixture.nativeElement.querySelectorAll('.bar');
    expect(skillElements.length).toBe(2);

    // Verify the skill names and percentages
    expect(skillElements[0].querySelector('h3').textContent).toContain('Angular');
    expect(skillElements[0].querySelector('.progress-bar').style.width).toBe('80%');

    expect(skillElements[1].querySelector('h3').textContent).toContain('TypeScript');
    expect(skillElements[1].querySelector('.progress-bar').style.width).toBe('90%');
  });

  
});
