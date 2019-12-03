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

  profile = {} as UserProfileModel;

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

  public createImgPath = () => {
    if(this.profile && this.profile.imagePath){
      var link = `${environment.sourcesurl}/${this.profile.imagePath}`;
      //console.log(link);
      return link;
    }

    return '';
  }

  public createMailTo() {
    return `mailto:${this.profile.email}`;
  }

  public createMessengerLink() {
    return `https://www.messenger.com/t/${this.profile.messengerName}`;
  }

  public createInstagramLink() {
    return `https://www.instagram.com/${this.profile.instagramName}`;
  }
}


