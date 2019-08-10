import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import { Chart} from 'chart.js';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  Records: any = [];

  build = ['ATTC', 'KBC', 'SSC', 'KCC', 'TMRTG', 'STTG', 'HQ' ];

  buildName: any = [];

  chart = [];
  constructor(private data: DataService) { }

  ngOnInit() {

  //onSubmit() {

    for (let i = 0; i <= this.build.length; i++) {
    this.data.reportRecord(this.build[i]).subscribe((data: {}) => {
      this.Records = data;
      console.log(this.Records.length);
      const buldingName = this.buildName.push(this.Records.length);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
            labels: this.build,
            datasets: [{
                label: 'Work Order for Building',
                data: this.buildName,

                borderColor: '#3cba9f',
                borderWidth: 1,
                //fill: false,
            }]
        },
        options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
                yAxes: [{
                  display: true
                }],
            }
        }
    });

    });
   }
  }


}
