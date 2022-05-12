import { ICompany } from "../../models/IUser";
import { GET } from "./client";
import { GetApiResponse, IResponseObject } from "./response";

const SupabaseDbUrl = "https://mcxmtxdkxkwlftcbdvtc.supabase.co";

export const Api = {

  GET_Company: async (payload: string): Promise<IResponseObject<ICompany>> => {
    const response = await GET(`${SupabaseDbUrl}/rest/v1/company/${payload}`);
    return response.data;
  },

  GET_All_Companies: async (): Promise<IResponseObject<ICompany[]>> => {
    const response = await GET(`${SupabaseDbUrl}/rest/v1/company`);
   console.log("ERROR", response)
   const success =response.status ==200|| response.status == 202;

    return GetApiResponse<ICompany[]>(!success,success?"success":`error [${response.status} - ${response.statusText}]`, response.data);
  }

};
