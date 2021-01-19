import { CfnOutput } from "@aws-cdk/core";
import * as iam from "@aws-cdk/aws-iam";
import * as cognito from "@aws-cdk/aws-cognito";
import * as sst from "@serverless-stack/resources";
import CognitoAuthRole from "./CognitoAuthRole";
import { VerificationEmailStyle } from "@aws-cdk/aws-cognito";

export default class CognitoStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const customForgotPasswordEmailLambda = new sst.Function(
      this,
      "bumpie-ForgotPassEmailLambda",
      {
        handler: "CustomForgotPassword.handler",
      }
    );

    const userPool = new cognito.UserPool(this, "bumpie-UserPool", {
      selfSignUpEnabled: true, // Allow users to sign up
      autoVerify: { email: true }, // Verify email addresses by sending a verification email
      signInAliases: { username: true, email: true }, // Set email as an alias
      userVerification: {
        emailBody:
          "Welcome to Bumpie!! Verify your account by clicking here -> {##Verify Email##}",
        emailStyle: VerificationEmailStyle.LINK,
        emailSubject: "Bumpie Email Verification",
      },
      standardAttributes: {
        givenName: {
          required: true,
          mutable: true,
        },
        email: {
          required: true,
          mutable: true,
        },
      },
      lambdaTriggers: {
        customMessage: customForgotPasswordEmailLambda,
      },
    });

    const userPoolDomain = new cognito.UserPoolDomain(
      this,
      "bumpie-UserPoolDomain",
      {
        userPool,
        cognitoDomain: {
          domainPrefix: "bumpie-apps",
        },
      }
    );

    const userPoolClient = new cognito.UserPoolClient(
      this,
      "bumpie-UserPoolClient",
      {
        userPool,
        generateSecret: false, // Don't need to generate secret for web app running on browsers
      }
    );

    const identityPool = new cognito.CfnIdentityPool(
      this,
      "bumpie-IdentityPool",
      {
        allowUnauthenticatedIdentities: false, // Don't allow unauthenticated users
        cognitoIdentityProviders: [
          {
            clientId: userPoolClient.userPoolClientId,
            providerName: userPool.userPoolProviderName,
          },
        ],
      }
    );

    // Export values
    new CfnOutput(this, "bumpie-UserPoolId", {
      value: userPool.userPoolId,
    });
    new CfnOutput(this, "bumpie-UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
    });
    new CfnOutput(this, "bumpie-IdentityPoolId", {
      value: identityPool.ref,
    });
  }
}
