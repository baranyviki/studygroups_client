import { Component, OnInit, Input } from '@angular/core';
import { UserProfileModel } from 'src/app/models/profile/userProfile.model';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyBuddyService } from '../study-buddy.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  profile = {} as UserProfileModel;

  constructor(private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService,
    private router: Router, private service:StudyBuddyService
  ) { }

  ngOnInit() {
    //this.getProfileDetails();
  }

  // private getProfileDetails = () =>{
  //   let id: string = this.activeRoute.snapshot.params['id'];
  //   console.log(`userid: ${id}`);
  //   this.service.getStudentProfile(id)
  //   .subscribe(res => {
  //     this.profile = res;
  //   },
  //   (error) =>{
  //     this.errorHandler.handleError(error);
  //   })
  // }

  public createImgPath = () => {
    if (this.profile && this.profile.imagePath) {
      var link = `${environment.sourcesurl}/${this.profile.imagePath}`;
      return link;
    }
    return `${environment.sourcesurl}/Resources/Images/blank-profile.png`;
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
