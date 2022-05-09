
import { Diagnostic } from "../logger/logger";

const className="troob.api.lib.api.response"

export interface IResponseObject<T> {
  error: boolean;
  message?: string;
  result?: T;
}


// export const isEmptyResponse = <T>(response:IResponseObject<T>) :boolean=>{
//   return  !_.isEmpty(response);
// }

export const GetApiResponse = <T>(
  error: boolean,
  message:string,
  result?: T
): IResponseObject<T> => {
  // Diagnostic(`${className} [BEGIN]`, result)
  const response =  {
    error:error as boolean,
    message:message as string,
    result: result as T
  } as IResponseObject<T>;
  // Diagnostic(`${className} [COMPLETE] returned response:`, response)
  return response;
};
