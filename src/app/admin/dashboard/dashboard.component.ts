import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7+'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  // public barChartData: ChartDataSets[] = {} as ChartDataSets[];
   public barChartData: ChartDataSets[] = [
     { data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A' }
   ];

  constructor(private adminService: AdminService, private errorHandler: ErrorHandler) { }

  ngOnInit() {
    this.GetStudentSemesterAvg();
  }

  GetStudentSemesterAvg() {
    this.adminService.getStudentSemesterAvg().subscribe(res => {
      let data = {} as ChartDataSets;
      data.data = res;
      data.label = 'Average per active semesters';
      this.barChartData= [{data: res, label:'Average per active semesters'}];

    },
      err => {

        this.errorHandler.handleError(err);
      });

  }

}
