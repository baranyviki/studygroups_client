import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/profile/userProfile.model';
import { ProfileService } from './profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: UserProfileModel;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    var username = localStorage.getItem("username");
    console.log(username);
    this.profileService.getStudentProfileDetails(username).subscribe(result => {
      this.profile = result as UserProfileModel;
      console.log(this.profile);
    },
    error => {
    });

  }

  public createImgPath = (serverPath:string) => {
    var link = `${environment.sourcesurl}/${serverPath}`;
    console.log(link);
    return link;
  }

}


