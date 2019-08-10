import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

   Records: any = [];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
      this.data.searchRecord().subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records);
    });
  }

 onSelect(record) {
   this.router.navigate(['/getdetail', record.idrepair_order]);
  }

  onEdit(record) {
    this.router.navigate(['/edit', record.idrepair_order]);
  }

  onDelete(record) {
    this.router.navigate(['/delete', record.idrepair_order]);
  }

}
