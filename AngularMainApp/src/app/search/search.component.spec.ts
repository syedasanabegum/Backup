import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { HeaderComponent } from '../header/header.component';
import {AutocompleteComponent} from '../autocomplete.component';
import { SearchService } from '../search.service';
import { SearchItem } from '../search-item.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, HeaderComponent, AutocompleteComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
      providers: [SearchService]
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should fetch data from the API', waitForAsync(() => {
    const searchTerm = 'music';
    const mockResponse = {
      results: [
        {
          trackName: 'Song 1',
          artistName: 'Artist 1',
          trackViewUrl: 'https://example.com/song1',
          artworkUrl30: 'https://example.com/thumbnail1.jpg',
          artistId: '123'
        },
        {
          trackName: 'Song 2',
          artistName: 'Artist 2',
          trackViewUrl: 'https://example.com/song2',
          artworkUrl30: 'https://example.com/thumbnail2.jpg',
          artistId: '456'
        }
      ]
    };

    spyOn(searchService, 'getDataFromApi').and.returnValue(Promise.resolve(mockResponse));

    component.searchTerm = searchTerm;
    component.fetchData();

    expect(component.loading).toBeTruthy();

    fixture.whenStable().then(() => {
      expect(component.results).toEqual(mockResponse.results);
      expect(component.loading).toBeFalsy();
      expect(component.error).toBeNull();
    });
  }));

  it('should handle API errors', waitForAsync(() => {
    const searchTerm = 'invalid';
    const errorMessage = 'Error fetching data from the API';

    spyOn(searchService, 'getDataFromApi').and.returnValue(Promise.reject(new Error(errorMessage)));

    component.searchTerm = searchTerm;
    component.fetchData();

    expect(component.loading).toBeTruthy();

    fixture.whenStable().then(() => {
      expect(component.results).toEqual([]);
      expect(component.loading).toBeFalsy();
      expect(component.error).toBe(errorMessage);
    });
  }));
*/
  // Other test cases...
});
