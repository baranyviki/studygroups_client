import { GeneralSelectionItem } from '../shared/general-selection-item.model';

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
    tutoringSubjects:GeneralSelectionItem[]
}