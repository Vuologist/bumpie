import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const main = async (event, context) => {
  console.log("Table Name: ", process.env.notificationTableName);
  console.log("event: ", event);
  console.log("event body: ", event.body);
  console.log("context: ", context);

  const cognitoAuthenticationProvider =
    event.requestContext.identity.cognitoAuthenticationProvider;
  const username = cognitoAuthenticationProvider.split(":")[2];
  console.log("Username: ", username);

  // const params = {
  //   TableName: process.env.tableName,
  //   // 'Key' defines the partition key and sort key of the item to be updated
  //   Key: {
  //     userId: "123", // The id of the author
  //     noteId: event.pathParameters.id, // The id of the note from the path
  //   },
  //   // 'UpdateExpression' defines the attributes to be updated
  //   // 'ExpressionAttributeValues' defines the value in the update expression
  //   UpdateExpression: "SET content = :content, attachment = :attachment",
  //   ExpressionAttributeValues: {
  //     ":attachment": data.attachment || null,
  //     ":content": data.content || null,
  //   },
  //   // 'ReturnValues' specifies if and how to return the item's attributes,
  //   // where ALL_NEW returns all attributes of the item after the update; you
  //   // can inspect 'result' below to see how it works with different settings
  //   ReturnValues: "ALL_NEW",
  // };

  let bodyContent = JSON.parse(event.body);
  console.log("frequency: ", bodyContent.frequency);

  const params = {
    TableName: process.env.notificationTableName,
    Key: {
      userId: username,
    },
    UpdateExpression: "SET frequency = :frequency",
    ExpressionAttributeValues: {
      ":frequency": bodyContent.frequency,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamoDb.update(params).promise();

    console.log("Dynamo Result: ", result);

    if (!result) {
      throw new Error("Item not found.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
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
