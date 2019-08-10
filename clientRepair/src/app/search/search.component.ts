import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

   Records: any= [];

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.searchRecord().subscribe((data:{})=>{
      this.Records = data
      console.log(this.Records)
    })
  }

}
