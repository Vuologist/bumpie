import CognitoStack from "./CognitoStack";

// Add stacks
export default function main(app) {
  new CognitoStack(app, "cognito");
}
