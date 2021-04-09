import { forgotPassword } from "./email-templates/ForgotPassword";
import { newSignUp } from "./email-templates/NewSignUp";

export const handler = (event, context, callback) => {
  console.log("Custom Message Lambda");
  console.log("event", event);
  console.log("context", context);

  const username = event.request.userAttributes.email.split("@")[0];

  if (event.triggerSource === "CustomMessage_ForgotPassword") {
    console.log("CustomMessage_ForgotPassword");
    event.response.emailSubject = "Bumpie Password Recovery";
    event.response.emailMessage = forgotPassword(event, username);
  } else if (event.triggerSource === "CustomMessage_SignUp") {
    console.log("CustomMessage_SignUp");
    event.response.emailSubject = "Bumpie Email Verification";
    event.response.emailMessage = newSignUp(event, username);
  }

  callback(null, event);
};
