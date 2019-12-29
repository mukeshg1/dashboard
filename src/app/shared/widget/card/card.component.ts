import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: {};

  @Input() label: string;
  @Input() value: string;
  @Input() percentage: string;
  @Input() data: [];
  @Input() fillColor: string;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
          chart: {
              type: 'area',
              backgroundColor: null,
              borderWidth: 0,
              margin: [2, 2, 2, 2],
              height: 80
          },
          title: {
              text: null
          },
          subtitle: {
              text: null
          },
          tooltip: {
              split: true,
              outside: true
          },
          legend : {
            enabled: false
          },
          credits: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          xAxis: {
            labels: {
              enabled: false
            },
            title: {
              text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickOptions: []
          },
          yAxis: {
            labels: {
              enabled: false
            },
            title: {
              text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickOptions: []
          },
          plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                },
                fillColor: this.fillColor
            }
        },
          series: [{
            data: this.data
          }]
    }
    HC_exporting(Highcharts);
    
  }

}
