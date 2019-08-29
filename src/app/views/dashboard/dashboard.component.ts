import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Pie
  public pieChartLabels: string[] = ['Impacted', 'Not Impacted'];
  public pieChartData: number[] = [65, 35];
  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#80d463', '#4b9c2e', '#356b22']
    }];
  public pieChartType = 'pie';
  pieChartposition: any = {
    legend: {
      position: 'bottom', labels: {
        fontSize: 10,
        usePointStyle: true
      }
    },
  };

  // barChart one
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom', labels: {
        fontSize: 10,
        usePointStyle: true
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            callback: function (value) {
              return value.substr(0, 6) + '..'; // truncate
            },
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItems, data) {
          const idx = tooltipItems[0].index;
          return data.labels[idx]; // do something with title
        }
      }
    },
  };
  public barChartColors: Color[] = [
    { backgroundColor: '#4b9c2e' },
    { backgroundColor: '#80d463' }
  ];

  public barChartLabels: string[] = ['NGen Enterprise', 'Game Technology', 'TAG Corp', 'New LLC'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [80, 75, 96, 71], label: 'Complete', stack: 'a' },
    { data: [65, 25, 64, 51], label: 'Active', stack: 'a' }
  ];

  public barChartColors_s: Color[] = [
    { backgroundColor: '#4b9c2e' },
    { backgroundColor: '#80d463' }
  ];

  // barChart Two
  public barChartLabels_s: string[] = ['Loan agreement', 'Securities', 'Derivatives', 'Credit agreement'];
  public barChartData_s: any[] = [
    { data: [76, 103, 86, 57], label: 'Complete', stack: 'a' },
    { data: [49, 45, 33, 78], label: 'Active', stack: 'a' }
  ];

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

}
