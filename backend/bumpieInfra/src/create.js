var AWS = require("aws-sdk");

export const handler = async (event, context, callback) => {
  if (event.triggerSource === "PostConfirmation_ConfirmSignUp") {
    console.log("post confirmation start");
    let db = new AWS.DynamoDB.DocumentClient();
    console.log("event", event);
    console.log("context", context);
    console.log("env", process.env);
    const params = {
      TableName: process.env.tableName,
      Item: {
        userId: event.userName,
        categoryNames: [
          "Category 1",
          "Category 2",
          "Category 3",
          "Category 4",
          "Category 5",
        ],
        subCategoryFields: [
          [{ title: "Category 1", value: 0 }],
          [{ title: "Category 2", value: 0 }],
          [{ title: "Category 3", value: 0 }],
          [{ title: "Category 4", value: 0 }],
          [{ title: "Category 5", value: 0 }],
        ],
      },
    };

    await db.put(params).promise();
  }
  callback(null, event);
};
