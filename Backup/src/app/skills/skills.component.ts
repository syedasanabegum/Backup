import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  showForm: boolean = false;
  newSkill: { skill: string, percentage: number } = { skill: '', percentage: 0 };
  skills: { skill: string, percentage: number }[] = [];

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addSkill() {
    this.skills.push({ skill: this.newSkill.skill, percentage: this.newSkill.percentage });
    this.newSkill.skill = '';
    this.newSkill.percentage = 0;
    this.showForm = false;
  }
}
