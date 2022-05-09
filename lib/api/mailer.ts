import sgMail from '@sendgrid/mail';
sgMail.setApiKey("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");


//ES8
export async function sendMail(to:string, subject:string, body:string){
    try {
      const emailMessage = scaffoldEmail(to, subject, body)
      return await sgMail.send(emailMessage);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

  function scaffoldEmail(to:string, subject:string, body:string){
    const message = {
      to: to,
      from: 'njinu@webparam.org', // Use the email address or domain you verified above
      subject: subject,
      text:body,
      // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    return message;
  }


