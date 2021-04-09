import { CfnOutput } from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
import * as sst from "@serverless-stack/resources";
import CognitoAuthRole from "./CognitoAuthRole";

export default class CognitoStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;
    const { table } = props;

    // create new user in dynamodb
    const createUser = new sst.Function(this, "bumpieInfra-Create", {
      handler: "src/create.handler",
      environment: {
        tableName: table.tableName,
      },
    });
    table.grantWriteData(createUser);

    const userPool = new cognito.UserPool(this, "bumpieInfra-UserPool", {
      selfSignUpEnabled: true, // Allow users to sign up
      autoVerify: { email: true }, // Verify email addresses by sending a verification code
      signInAliases: { email: true }, // Set email as an alias
      lambdaTriggers: {
        postConfirmation: createUser,
        customMessage: new sst.Function(this, "bumpieInfra-CustomMsg", {
          handler: "src/CustomMsg.handler",
        }),
      },
    });

    const userPoolClient = new cognito.UserPoolClient(
      this,
      "bumpieInfra-UserPoolClient",
      {
        userPool,
        generateSecret: false, // Don't need to generate secret for web app running on browsers
      }
    );

    new cognito.UserPoolDomain(this, "bumpieInfra-UserPoolDomain", {
      userPool,
      cognitoDomain: {
        domainPrefix: "bumpieinfra",
      },
    });

    const identityPool = new cognito.CfnIdentityPool(
      this,
      "bumpieInfra-IdentityPool",
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

    const authenticatedRole = new CognitoAuthRole(
      this,
      "bumpieInfra-CognitoAuthRole",
      {
        identityPool,
      }
    );

    // Export values
    new CfnOutput(this, "bumpieInfra-UserPoolId", {
      value: userPool.userPoolId,
    });
    new CfnOutput(this, "bumpieInfra-UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
    });
    new CfnOutput(this, "bumpieInfra-IdentityPoolId", {
      value: identityPool.ref,
    });
    new CfnOutput(this, "bumpieInfra-AuthenticatedRoleName", {
      value: authenticatedRole.role.roleName,
      exportName: app.logicalPrefixedName("bumpieInfra-CognitoAuthRole"),
    });
  }
}
