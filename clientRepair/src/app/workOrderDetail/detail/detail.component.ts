import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  public idrepair_order;

  Records: any = [];


  constructor(private route: ActivatedRoute, private data: DataService) {
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.idrepair_order = id;
    console.log(this.idrepair_order);

    this.data.detailRecord(this.idrepair_order).subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records.building);
    });
  }
}
