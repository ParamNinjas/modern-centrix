import { Handler } from "aws-lambda";
import { GetApiResponse, IResponseObject } from "../lib/api/response";
import { ICompany } from "../models/IUser";
import { UserRepository } from "../repositories/userRepository";
import { Diagnostic } from "../lib/logger/logger";
import { sendMail } from "../lib/api/mailer";
const className = "suntec-tms-fe-service-userHandler"

	
const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

  
  export const getCompany: Handler = async (event: any) => {

    Diagnostic(`${className}.getCompany [BEGIN]`, event);
    const _userId = "6216528b3194daf8051c100c";
    const userId = event.pathParameters.id;

    console.log("__payload", userId)

    const userResponse = await UserRepository.GetCompany(_userId);
    const result = userResponse.error?  
    GetApiResponse<ICompany>(true, "Error getting user", undefined):  
    GetApiResponse<ICompany>(false, userResponse.message, userResponse.result)

    const response = {
      statusCode: result.error? 500: 200,
      headers: headers,
      body: JSON.stringify(result),
    };
  
    return new Promise((resolve) => {
      resolve(response)
    })
  }
  export const getAllCompanies: Handler = async (event: any) => {

    Diagnostic(`${className}.getCompany [BEGIN]`, event);


    const userResponse = await UserRepository.GetAllCompanies();
    const result = userResponse.error?  
    GetApiResponse<ICompany[]>(true, "Error getting user", undefined):  
    GetApiResponse<ICompany[]>(false, userResponse.message, userResponse.result)

    const response = {
      statusCode: result.error? 500: 200,
      headers: headers,
      body: JSON.stringify(result),
    };
  
    return new Promise((resolve) => {
      resolve(response)
    })
  }




