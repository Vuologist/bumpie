import DataDynamoDBStack from "./DataDynamoDBStack";
import NotificationDynamoDBStack from "./NotificationDynamoDBStack";
import CognitoStack from "./CognitoStack";

export default function main(app) {
  const dataDb = new DataDynamoDBStack(app, "bumpieDataInfraDynamodb");
  const notificationDb = new NotificationDynamoDBStack(
    app,
    "bumpieNotificationInfraDynamodb"
  );

  new CognitoStack(app, "bumpieInfraCognito", {
    dataTable: dataDb.dataTable,
    notificationTable: notificationDb.notificationTable,
  });
}
