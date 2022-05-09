// import { GetJwToken } from "@/lib/cookies/cookies";

import { Diagnostic } from "../logger/logger";


const axios = require("axios").default;

// const token = GetJwToken();
// console.log(token);
let  header = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  };
// } else {
//   header = {
//     Authorization: `Bearer ${token}`,
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "X-Requested-With",
//   };
// }

export async function GET(endPoint) {
  try {
    const result = await axios.get(`${endPoint}`, { headers: header });
    return result;
  } catch (error) {
    console.log(
      `[API ERROR : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    );
    return error.response;
  }
}

export async function POST(endPoint, payload) {
  console.log("String", endPoint, payload)
  try {
  
    const result = await axios.post(`${endPoint}`, payload, {
      headers: header,
    });

    return result;
  } catch (error) {
    console.log(`[API ERROR : Method: POST; Endpoint: ${endPoint}]`, error);
    Diagnostic("ERROR ON POST, returning", error);
    return error.response;
  }
}

export async function DELETE(endPoint, payload) {
  try {
    const result = await axios.post(`${endPoint}`, payload, {
      headers: header
    });
    console.log("resssss", result)
    return result;
  } catch (error) {
    console.log(`[API ERROR : Method: DELETE; Endpoint: ${endPoint}]`, error);
    Diagnostic("ERROR ON DELETE, returning", error);
    return error.response;
  }
}

export function PUT(endPoint, params) {
  let HEADER = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .put(`${endPoint}`, { headers: HEADER, params: params })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
