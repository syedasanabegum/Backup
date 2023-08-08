import { Component, ViewChild, Renderer2,VERSION, HostListener, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements AfterViewInit, OnInit  {
  mybreakpoint!: number;
  rowHeight!: string;
  panelOpenState = false;
  color= '#50a7a7';
 
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;
  isExpanded: boolean = false;
  contentHeight: string = 'auto';
  fixedHeight: string = '30%';

  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.updateGrid();
  }

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
  
  
  ngAfterViewInit() {
    this.calculateContentHeight();
  }
/*card size toggle */
  toggleComponent() {
    this.isExpanded = !this.isExpanded;
    this.calculateContentHeight();
  }
   private calculateContentHeight() {
    if (this.isExpanded && this.contentWrapper) {
      this.renderer.setStyle(this.contentWrapper.nativeElement, 'height', 'auto');
      const height = this.contentWrapper.nativeElement.offsetHeight;
      this.contentHeight = height + 'px';
    } else {
      this.contentHeight = this.isExpanded ? '100%' : this.fixedHeight;
    }
  }
}
