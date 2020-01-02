import { GeneralSelectionItem } from '../shared/general-selection-item.model';

export interface UserProfileModel{
    firstName: string,
    lastName:string,
    genderType: number,
    email:string,
    messengerName:string,
    instagramName:string,
    userName:string,
    password:string,
    neptunCode:string,
    imagePath:string,
    tutoringSubjects:GeneralSelectionItem[]
}