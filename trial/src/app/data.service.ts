import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*private formDataSubject = new BehaviorSubject<any>({});
  data$ = this.formDataSubject.asObservable();

  setData(formData: any[]) {
    this.formDataSubject.next(formData);
  }*/
  private formDataArray: any[] = [];
  private formDataSubject = new BehaviorSubject<any[]>(this.formDataArray);
  data$ = this.formDataSubject.asObservable();
  
  addData(formData: any) {
    this.formDataArray.push(formData);
    this.formDataSubject.next(this.formDataArray.slice());
  }
    
  
}
