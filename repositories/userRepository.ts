import { ICompany } from "../models/IUser";
import {Api} from "../lib/api/endpoints"
import { GetApiResponse, IResponseObject } from "../lib/api/response";

async function GetCompany(businessUserId:string): Promise<IResponseObject<ICompany>>{
    const _response = await Api.GET_Company(businessUserId);
   
    if(_response.error){
       return  GetApiResponse<ICompany>(true,"Cannot retrieve user",undefined)}
      
    else{
        const response = GetApiResponse<ICompany>(false,`Retrieved business user [ID: ${_response.result?.id}]`,_response.result as ICompany);
        return response;
    }
} 




export const UserRepository= {
    GetCompany:GetCompany,
}

