export interface IUser{
    displayName:string,
    userId:number,
    created_at: string,
    id:string
}

export enum UserType{
    business,
    driver
}


export interface ICompany extends IUser{
   
}
