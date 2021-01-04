import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments = [1,2,2,3,5,4,5];
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  //new template
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;

  constructor() {
  
    this.chartOptions = {
      series: [
        {
          name: "Orders",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        // text: "Daily Total Orders",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#fbe564", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",         
        ]
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Orders",
          data: [10, 41, 35, 51, 49, 62, 69]
        },
      
      ],

      
      chart: {
        height: 200,
        type: "line",
    
        zoom: {
          enabled: false
        }
       
        
      },
      dataLabels: {
        enabled: false,
        
      },
      stroke: {
        curve: "straight"
      },
      title: {
        // text: "Daily Total Orders",
        align: "left",
        
      },
      grid: {
        row: {
            colors: ['#000000', 'transparent'],
            opacity: 0.5
        }, 
      
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",         
        ]
      }
    };

    this.chartOptions2 = {
      series: [
        {
          name: "Orders",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        // text: "Daily Total Orders",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f02201", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",         
        ]
      }
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Orders",
          data: [10, 41, 35, 51, 49, 62, 69]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        // text: "Daily Total Orders",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#FFFFFF", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",         
        ]
      }
    };
    
   }

  ngOnInit(): void {
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
  

}
