import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap ,throttleTime } from 'rxjs/operators';
import { SearchService } from './search.service';
import { SearchItem } from './search-item.model';

@Component({
  selector: 'app-autocomplete',
  template: `
  <div class="auto">
    <mat-form-field>
      <input type="text" placeholder="Search" [formControl]="searchControl" matInput [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
        <mat-option *ngFor="let result of filteredResults | async" [value]="result">
          <!--{{ result.track}} - {{ result.artist }}-->
          <a [href]="result.link" target="_blank">{{ result.track }}- {{ result.artist }}</a> 
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  </div>
  `,
  styles:[`.auto{
    display:flex;
    justify-content: center;
    align-items: center;
  },
  mat-form-field{
    width:50%;
  }`
  ],
  
})
export class AutocompleteComponent {
  searchControl = new FormControl();
  filteredResults: Observable<SearchItem[]>;
  
  

  constructor(private searchService: SearchService) {
    this.filteredResults = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchService.getDataFromApi(term))
    );
    
  }


  displayFn(result: SearchItem): string {
    if (result) {
      return result.track + ' - ' + result.artist;
    }
    return '';
  }
}
