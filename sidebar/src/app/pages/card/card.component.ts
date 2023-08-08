import { Component, Input, OnInit , ChangeDetectorRef} from '@angular/core';
import { ViewChild, Renderer2,VERSION, HostListener, ElementRef, AfterViewInit } from '@angular/core';

import { DataService } from '../../data.service'; // Import the same service

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  mybreakpoint!: number;
  rowHeight!: string;
  panelOpenState = false;
  color= '#50a7a7';

  constructor(private dataService: DataService,  private cdr: ChangeDetectorRef, private renderer: Renderer2) {}
/*form */
formData: any[] = [];
ngOnInit() {
  this.updateGrid();//responsive
  this.dataService.data$.subscribe(data => {
    this.formData = data;
  });
}
/*form End */

/*responsiveness*/
@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.updateGrid();
}

private updateGrid() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= 600) {
    this.mybreakpoint = 2;
    this.rowHeight = '2:1';
  } else if (innerWidth <= 1000) {
    this.mybreakpoint = 4;
    this.rowHeight = '2:1';
  } else {
    this.mybreakpoint = 7;
    this.rowHeight = '1:1';
  }
}

}
