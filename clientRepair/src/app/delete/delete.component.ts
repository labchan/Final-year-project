import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Records} from '../records';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public idrepair_order;

  Records: any = [];

  deleteForm = new FormGroup({
    idrepair_order: new FormControl(''),
    building: new FormControl(''),
    location: new FormControl(''),
    requested_by: new FormControl(''),
    contact_tel: new FormControl(''),
    description: new FormControl(''),
    photoPath: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private data: DataService, private routing: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.idrepair_order = id;
    console.log(this.idrepair_order);

    this.data.detailRecord(this.idrepair_order).subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records[0]);

      this.deleteForm.patchValue({
        building: this.Records[0].building,
        idrepair_order: this.Records[0].idrepair_order,
        location: this.Records[0].location,
        requested_by: this.Records[0].requested_by,
        contact_tel: this.Records[0].contact_tel,
        description: this.Records[0].description,
      });

    });
  }

  onSbumit() {
    console.log(this.deleteForm.value);
    this.data.delOrder(this.idrepair_order, this.deleteForm.value)
    .subscribe(
    (response) => console.log('delete complete', response),
    (error) => console.error(error)
    );
  }

  returnView() {
    this.routing.navigate(['/search']);
  }

}
