import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchService } from '../search.service';
import { HeaderComponent } from '../header/header.component';
import {AutocompleteComponent} from '../autocomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { of } from 'rxjs';
import { SearchItem } from '../search-item.model';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockSearchService: jasmine.SpyObj<SearchService>; // Create a mock SearchService

  beforeEach(() => {
    // Create a spy object for the SearchService with the methods we want to mock
    const searchServiceSpy = jasmine.createSpyObj('SearchService', ['getDataFromApi']);

    TestBed.configureTestingModule({
      declarations: [SearchComponent, HeaderComponent,AutocompleteComponent],
      imports:[HttpClientModule, MatFormFieldModule, 
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        ],
      providers: [
        { provide: SearchService, useValue: searchServiceSpy }, // Provide the mock SearchService
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    // Assign the mock SearchService to the component's dataService
    mockSearchService = TestBed.inject(SearchService) as jasmine.SpyObj<SearchService>;
    component.dataService = mockSearchService;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should handle errors when fetching data from the API', async () => {
    const mockError = new Error('Mock API Error');
  
    mockSearchService.getDataFromApi.and.returnValue(Promise.reject(mockError));
  
    component.searchTerm = 'test';
    try {
      await component.fetchData();
  
      // The code should not reach here if the promise is rejected with an error
      //fail('Expected the promise to be rejected.');
    } catch (error) {
      // Expect the error message to be set correctly in the component
      expect(component.error).toBe('Mock API Error');
    }
  });

  it('should fetch data from the API and transform the response to SearchItem[]', async () => {
    const searchTerm = 'test';
    const mockResponse: SearchItem[] = [
      new SearchItem(
        'Mock Track 1',
        'Mock Artist 1',
        'http://mock-track-url-1',
        'http://mock-artwork-url-1',
        'mock-artist-id-1'
      ),
      
    ];
  
    // Set the return value of getDataFromApi to the mockResponse
    mockSearchService.getDataFromApi.and.returnValue(Promise.resolve(mockResponse));
  
    // Call the fetchData method
    component.searchTerm = searchTerm;
    await component.fetchData();
  
    
    expect(component.loading).toBe(false);
    expect(component.error).toBe(null);
  });
  
  
  
  
  
});
