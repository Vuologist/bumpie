import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event, context) => {
  console.log("Table Name: ", process.env.notificationTableName);
  console.log("event: ", event);
  console.log("context: ", context);

  const cognitoAuthenticationProvider =
    event.requestContext.identity.cognitoAuthenticationProvider;
  const username = cognitoAuthenticationProvider.split(":")[2];

  const params = {
    TableName: process.env.notificationTableName,
    Key: {
      userId: username,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();

    console.log("Dynamo Result: ", result);
    console.log("Dynamo Item: ", result.Item);

    if (!result.Item) {
      throw new Error("Item not found.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }
};
