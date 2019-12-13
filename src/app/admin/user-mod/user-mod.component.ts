import { Component, OnInit } from '@angular/core';
import { UserListItem } from 'src/app/models/admin/user-list-item-model';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private adminService: AdminService, 
    private errorHandler: ErrorHandlerService, private location: Location) { }
  user= {} as UserListItem;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let id: string = this.activeRoute.snapshot.params['id'];

    this.adminService.getUser(id).subscribe(
      result => {
        this.user = result;
      },error => {
        this.errorHandler.handleError(error);
      }
    );
  }

onDisable()
{

}

onCancel()
{
  console.log("cancelled");
     this.location.back();
}

onDelete()
{

}
onEnable()
{

}

}
