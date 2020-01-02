import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { UserListItem } from 'src/app/models/admin/user-list-item-model';
import { AdminService } from '../admin.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<UserListItem>;
  displayedColumns: string[] = ['userName', 'email','disabled', 'manage'];

  constructor(private adminService: AdminService, private errorHandler: ErrorHandlerService, private router:Router) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getUsers();

  }

  getUsers() {
    this.adminService.getUserManageList().subscribe(result => {
      this.dataSource.data = result;
    },
      (error) => {
        this.errorHandler.handleError(error);
      });
  }

  public redirectToManage(id: string) {
    let url: string = `/admin/user-mod/${id}`;
    this.router.navigate([url]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
