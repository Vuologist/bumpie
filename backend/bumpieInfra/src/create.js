var AWS = require("aws-sdk");

export const handler = async (event, context, callback) => {
  if (event.triggerSource === "PostConfirmation_ConfirmSignUp") {
    console.log("post confirmation start");
    let db = new AWS.DynamoDB.DocumentClient();
    console.log("event", event);
    console.log("context", context);
    console.log("env", process.env);

    // write to data table
    const dataParams = {
      TableName: process.env.dataTableName,
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

    await db.put(dataParams).promise();

    // write to notification table
    const notificationParams = {
      TableName: process.env.notificationTableName,
      Item: {
        userId: event.userName,
        frequency: "yearly",
      },
    };
    await db.put(notificationParams).promise();
  }
  callback(null, event);
};
