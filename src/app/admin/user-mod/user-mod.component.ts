import { Component, OnInit } from '@angular/core';
import { UserListItem } from 'src/app/models/admin/user-list-item-model';
import { UserPatchDTO } from 'src/app/models/admin/user-patch-dto.model';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.scss']
})
export class UserModComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private adminService: AdminService,
    private errorHandler: ErrorHandlerService, private location: Location,private _snackBar: MatSnackBar,) { }
  user = {} as UserListItem;
  userPatchDto = {} as UserPatchDTO;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let id: string = this.activeRoute.snapshot.params['id'];

    this.adminService.getUser(id).subscribe(
      result => {
        this.user = result;
      }, error => {
        this.errorHandler.handleError(error);
      }
    );
  }

  onDisable() {
    this.userPatchDto.disabled = true;
    this.userPatchDto.id = this.user.id;
    this.adminService.patchUser(this.userPatchDto).subscribe(result => {
      this.openSnackBar('User was disabled.','OK');
      this.location.back();
    }
      , error => {
        this.errorHandler.handleError(error);
      });
  }

  onCancel() {
    console.log("cancelled");
    this.location.back();
  }

  onDelete() {
    this.adminService.deleteUser(this.user.id).subscribe(result => {
      this.openSnackBar(`User was deleted.`,'OK');
      this.location.back();
    }
      , error => {
        this.errorHandler.handleError(error);
      });
  }

  onEnable() {
    this.userPatchDto.disabled = false;
    this.userPatchDto.id = this.user.id;
    this.adminService.patchUser(this.userPatchDto).subscribe(result => {
      this.openSnackBar('User was enabled.','OK');
      this.location.back();
    }
      , error => {
        this.errorHandler.handleError(error);
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
