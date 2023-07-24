import { Component } from '@angular/core';
import { SearchService } from "../search.service";
import { SearchItem } from "../search-item.model";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
  
})
export class SearchComponent {
  /*
  searchResults: SearchItem[] = [];
  loading: boolean = false;

  constructor(private searchService: SearchService) {}

  doSearch(term: string) {
    this.loading = true;
    this.searchService
      .search(term)
      .then((results: SearchItem[]) => {
        this.searchResults = results;
        this.loading = false;
      })
      .catch((error: any) => {
        console.error("An error occurred:", error);
        this.loading = false;
      });
  }*/
  searchTerm: string = '';
  loading: boolean = false;
  error: string | null = null;
  results: any[] = [];

  constructor(private dataService: SearchService) {}

  fetchData(): void {
    this.loading = true;
    this.error = null;
    this.results = [];

    this.dataService.getDataFromApi(this.searchTerm)
      .then((data: any) => {
        this.results = data.results;
        this.loading = false;
      })
      .catch((error: any) => {
        this.error = error.message;
        this.loading = false;
      });
  }
}
