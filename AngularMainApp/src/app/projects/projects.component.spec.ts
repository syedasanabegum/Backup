import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent, Project } from './projects.component';
import { HeaderComponent } from '../header/header.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent, HeaderComponent],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the projects component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new project to the projects list', () => {
    const newProject: Project = {
      image: 'new-image-url',
      title: 'New Project',
      description: 'New project description',
    };

    component.newProject = { ...newProject };
    component.addProject();

    expect(component.projects).toContain(newProject);
  });

  it('should clear newProject properties after adding a new project', () => {
    const newProject: Project = {
      image: 'new-image-url',
      title: 'New Project',
      description: 'New project description',
    };

    component.newProject = { ...newProject };
    component.addProject();

    expect(component.newProject.image).toBe('');
    expect(component.newProject.title).toBe('');
    expect(component.newProject.description).toBe('');
  });

  it('should filter projects based on the search term', () => {
    const projects: Project[] = [
      { image: 'url-1', title: 'Project 1', description: 'Project 1 description' },
      { image: 'url-2', title: 'Project 2', description: 'Project 2 description' },
      { image: 'url-3', title: 'Another Project', description: 'Another project description' },
    ];

    component.projects = [...projects];
    component.searchTerm = 'Project 1';

    component.searchProjects();

    expect(component.filteredProjects.length).toBe(1);
    expect(component.filteredProjects).toContain(projects[0]);
    
  });

 

  it('should return filtered projects when searchTerm is set', () => {
    const projects: Project[] = [
      { image: 'url-1', title: 'Project 1', description: 'Project 1 description' },
      { image: 'url-2', title: 'Project 2', description: 'Project 2 description' },
    ];

    component.projects = [...projects];
    component.searchTerm = 'Project 1';

    component.searchProjects();
    const result = component.getProjectsToDisplay();

    expect(result.length).toBe(1);
  });

  it('should return all projects when searchTerm is empty', () => {
    const projects: Project[] = [
      { image: 'url-1', title: 'Project 1', description: 'Project 1 description' },
      { image: 'url-2', title: 'Project 2', description: 'Project 2 description' },
    ];

    component.projects = [...projects];
    component.searchTerm = '';

    component.searchProjects();
    const result = component.getProjectsToDisplay();

    expect(result.length).toBe(2);
  });
});
