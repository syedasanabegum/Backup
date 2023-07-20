import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  showForm: boolean = false;
  newProject: { image: string, title: string, description: string } = { image: '', title: '', description: '' };
  projects: { image: string, title: string, description: string }[] = [];

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProject() {
    this.projects.push({ ...this.newProject });
    this.newProject.image = '';
    this.newProject.title = '';
    this.newProject.description = '';
    this.showForm = false;
  }

  filteredProjects: Project[] = [];
  searchTerm: string = '';

  searchProjects() {
    this.filteredProjects = this.projects.filter(project =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getProjectsToDisplay(): Project[] {
    return this.searchTerm ? this.filteredProjects : this.projects;
  }
}
interface Project {
  image: string;
  title: string;
  description: string;
}
