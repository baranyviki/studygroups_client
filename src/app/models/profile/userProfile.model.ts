import { SubjectModel } from './subject.model';
export interface UserProfileModel{
    firstName: string,
    lastName:string,
    gendertype: number,
    email:string,
    messengerName:string,
    instagramName:string,
    username:string,
    password:string,
    neptunCode:string,
    imagePath:string,
    tutoringSubjects:SubjectModel[]
}