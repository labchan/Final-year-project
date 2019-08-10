import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Records} from '../records';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public idrepair_order;


  Records: any = [];


  editForm = new FormGroup({
    idrepair_order: new FormControl({value: '', disabled: true}),
    building: new FormControl(''),
    location: new FormControl(''),
    requested_by: new FormControl(''),
    contact_tel: new FormControl(''),
    description: new FormControl(''),
    photoPath: new FormControl(''),
    date: new FormControl(''),
    catalog: new FormControl(''),
  });


  constructor(private router: ActivatedRoute, private data: DataService, private routing: Router) { }

  ngOnInit() {

    // tslint:disable-next-line: radix
    const id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.idrepair_order = id;
    console.log(this.idrepair_order);

    this.data.detailRecord(this.idrepair_order).subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records[0]);

      this.editForm.patchValue({
        building: this.Records[0].building,
        idrepair_order: this.Records[0].idrepair_order,
        location: this.Records[0].location,
        requested_by: this.Records[0].requested_by,
        contact_tel: this.Records[0].contact_tel,
        description: this.Records[0].description,
        date: this.Records[0].date,
        catalog: this.Records[0].catalog,
      });

    });
  }

  onSbumit() {
    console.log(this.editForm.value);
    this.data.editOrder(this.idrepair_order, this.editForm.value)
    .subscribe(
    (response) => console.log('success', response),
    (error) => console.error(error)
    );
  }

  returnHome() {
    this.routing.navigate(['/home']);
  }
}
