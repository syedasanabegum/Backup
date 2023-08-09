import { Component, Input, OnInit , ChangeDetectorRef} from '@angular/core';
import { DataService } from '../data.service'; // Import the same service

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  //@Input() cardData: any;
 
 

  constructor(private dataService: DataService,  private cdr: ChangeDetectorRef) {}
/*
  formData: any[] = [];

ngOnInit() {
  this.dataService.data$.subscribe(data => {
    this.formData = data;
  });
}*/
formData: any[] = [];

ngOnInit() {
  this.dataService.data$.subscribe(data => {
    this.formData = data;
  });
}

  
}
