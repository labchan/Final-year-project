import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { HttpClient} from '@angular/common/http';
/*import { FormGroup, FormControl, FormBuilder } from '@angular/forms';*/
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})



export class CreateComponent implements OnInit {

  orderForm = new FormGroup({
    idrepair_order: new FormControl('0'),
    building: new FormControl('', [ Validators.required, Validators.maxLength(10)]),
    location: new FormControl('', [ Validators.required, Validators.maxLength(20)]),
    description: new FormControl('', [ Validators.required]),
    requested_by: new FormControl('', [ Validators.required, Validators.maxLength(15)]),
    contact_tel: new FormControl('', [ Validators.required, , Validators.minLength(8), Validators.maxLength(8),
      Validators.pattern('[0-9]*')]),
    photoPath: new FormControl(''),
    date: new FormControl(''),
    catalog: new FormControl(''),
  });

  get buildingName() {
    return this.orderForm.get('building');
  }

  get locationName(){
    return this.orderForm.get('location');
  }

  get contact() {
    return this.orderForm.get('requested_by');
  }

  get tel() {
    return this.orderForm.get('contact_tel');
  }

  get desc() {
    return this.orderForm.get('description');
  }
  get date() {
    return this.orderForm.get('date');
  }
  get catalog() {
    return this.orderForm.get('catalog');
  }

  constructor(private data: DataService, private router: ActivatedRoute, private routing: Router) { }

  ngOnInit() {}

  onSbumit() {
    console.log(this.orderForm.value);
    this.data.addRecord(this.orderForm.value)
    .subscribe(
    (response) => console.log('success', response),
    (error) => console.error(error)
    );
  }

  returnView() {
    this.routing.navigate(['/search']);
  }

  returnHome() {
    this.routing.navigate(['/home']);
  }
}
