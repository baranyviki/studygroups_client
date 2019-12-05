import { Component, OnInit, ErrorHandler } from '@angular/core';
import { UserProfileModel } from '../models/profile/userProfile.model';
import { ProfileService } from './profile.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../shared/error-handler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = {} as UserProfileModel;
  isLoggedInUsersProfile: boolean;
  constructor(private profileService: ProfileService, private router: Router, private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    let id: string = this.activeRoute.snapshot.params['id'];
    console.log(`id:${id}`)
    if (id == null) {
      this.getLoggedInProfile();
      this.isLoggedInUsersProfile = true;
    } else {
      this.getOtherProfile(id);
      this.isLoggedInUsersProfile = false;
    }
    console.log('logged in user?');
    console.log(this.isLoggedInUsersProfile);
  }

  getOtherProfile(id: string) {
    this.profileService.getStudentProfileById(id).subscribe(result => {
      this.profile = result;
    },
      error => {
        this.errorHandler.handleError(error);
      });
  }

  getLoggedInProfile() {
    this.profileService.getStudentProfileDetails().subscribe(result => {
      this.profile = result;
    },
      error => {
        this.errorHandler.handleError(error);
      });
  }

  public createImgPath = () => {
    if (this.profile && this.profile.imagePath) {
      var link = `${environment.sourcesurl}/${this.profile.imagePath}`;
      return link;
    }
    return `${environment.sourcesurl}/Resources/Images/blank-profile.png`;
  }

  public redirectToModProfile() {
    this.router.navigate(['profile/update']);
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


