import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  searchForm = new FormGroup({

    building: new FormControl('', [ Validators.required, Validators.maxLength(10)]),
    catalog: new FormControl('', [ Validators.required, Validators.maxLength(20)]),
  });

  Records: any = [];
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchForm.value);
    const x = this.searchForm.value;
    console.log(x);
    this.data.findRecord(x.building , x.catalog).subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records.length);
    });
   }
}
