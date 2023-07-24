import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { map, filter } from "rxjs/operators";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  form: FormGroup=null!;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
        .subscribe( data => {
          if (this.form.valid) {
            data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
            data.lastUpdateTS = new Date();
            console.log(JSON.stringify(data))
          }
        });
  }

  onSubmit() {
    console.log("Form submitted!");
  }

}
