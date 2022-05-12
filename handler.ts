'use strict';

import { Handler } from "aws-lambda";
import { UserRepository } from "./repositories/userRepository";


async function process(event:any) {
  console.log("e", event)
}

export const hello: Handler = async (event: any) => {

  return new Promise((resolve) => {
    process(event)
    .then((res) => {
      console.log("results", res);
      const response = {
        statusCode: 200,
        body: JSON.stringify({"result":res})
      };
  
      resolve(response)
    })
  

  })



  


}
