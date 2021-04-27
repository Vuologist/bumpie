import { CfnOutput } from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

export default class NotificationDynamoDBStack extends sst.Stack {
  // public reference to table
  notificationTable;

  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    this.notificationTable = new dynamodb.Table(
      this,
      "bumpieNotificationInfra-Table",
      {
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
        partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
      }
    );

    // Output values
    new CfnOutput(this, "bumpieNotificationInfra-TableName", {
      value: this.notificationTable.tableName,
      exportName: app.logicalPrefixedName("bumpieNotificationInfra-TableName"),
    });
    new CfnOutput(this, "bumpieNotificationInfra-TableArn", {
      value: this.notificationTable.tableArn,
      exportName: app.logicalPrefixedName("bumpieNotificationInfra-TableArn"),
    });
  }
}
