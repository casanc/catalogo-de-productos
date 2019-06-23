import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.css']
})
export class GenerateOrderComponent implements OnInit {

  private generateOrderForm: FormGroup;
  private validFile: boolean;
  private showWarning: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.generateOrderForm = formBuilder.group({
      'name': ['', Validators.required],
      'bornDate': ['', Validators.required],
      'city': ['', Validators.required],
      'file': ['', Validators.required],
    });
    this.validFile = false;
    this.showWarning = true;
  }

  ngOnInit() {
  }

  uploadFile(event) {
    if(event.target.files[0].size > 1000000) {
      this.validFile = false;
      this.showWarning = false;
    } else {
      this.validFile = true;
      this.showWarning = true;
    }
  }
}
