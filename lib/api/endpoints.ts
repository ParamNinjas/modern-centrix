import { ICompany } from "../../models/IUser";
import { GET } from "./client";
import { IResponseObject } from "./response";

const SupabaseDbUrl = "https://mcxmtxdkxkwlftcbdvtc.supabase.co";

export const Api = {

  GET_Company: async (payload: string): Promise<IResponseObject<ICompany>> => {
    const response = await GET(`${SupabaseDbUrl}/rest/v1/company/${payload}`);
    return response.data;
  },
  GET_All_Companies: async (payload: string): Promise<IResponseObject<ICompany>> => {
    const response = await GET(`${SupabaseDbUrl}/rest/v1/company`);
    return response.data;
  },
 

};
