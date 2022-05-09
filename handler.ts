'use strict';

import { Handler } from "aws-lambda";


var bcrypt = require("bcryptjs");

//  const bcrypt = require('bcrypt');
 const myPlaintextPassword = 's0/\/\P4$$w0rD';
 const encryptedTextPassword = '$2b$10$.vLA2Maw19LE2yZ1xqnD5uViUMnsdezxA0PQiyxoePGUuboAWhwoW';

 const hashPassword = async(password) => {
  bcrypt.hash(password, 10, function(err, hash) {
    return hash
  });
 }

async function checkUser(password) {

  console.log("Input", password, "hashed", encryptedTextPassword)

  //... fetch user from a db etc.
  const match = await bcrypt.compare(password, encryptedTextPassword);

  if(match) {
      return true
  }

  return false
}

export const hello: Handler = async (event: any) => {

  return new Promise((resolve) => {
    checkUser(myPlaintextPassword)
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
