import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  chartOptions: {};

  Highcharts = Highcharts;

  ngOnInit() {
    this.chartOptions = {
        title: {
            text: 'Sales and Purchase by Month This Year'
        },
    
        subtitle: {
            text: 'Random data'
        },
    
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        xAxis: {
          title: {
              text: 'Year'
          }
      },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        credits : {
          enabled: false
        },
        exporting: {
          enabled: true
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1,
                pointEnd: 12
            }
        },
    
        series: [{
            name: 'Sales',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 1678, 1891, 10019, 1111]
        }, {
            name: 'Purchase',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434, 154175, 1678, 1891, 10019]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    };
    HC_exporting(Highcharts);
    setTimeout( () => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
