import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AdminService } from '../admin.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';
import { SubjectModListItem } from 'src/app/models/admin/subject-mod-list-item.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<SubjectModListItem>;
  displayedColumns: string[] = ['subjectcode', 'name', 'manage'];

  constructor(private adminService: AdminService, private errorHandler: ErrorHandlerService, private router:Router) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getSubjects();

  }

  redirectToManage(id:string)
  {
    let url: string = `/admin/subject/mod/${id}`;
    this.router.navigate([url]);
  }

  getSubjects() {
    this.adminService.getAllSubject().subscribe(result => {
      this.dataSource.data = result;
      console.log(result);
    },
      (error) => {
        this.errorHandler.handleError(error);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
