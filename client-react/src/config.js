const dev = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W9xUtvYng",
    APP_CLIENT_ID: "6veevn4el3p4bh3qgjeaug5ok2",
    IDENTITY_POOL_ID: "us-east-1:fb6affaf-249a-4c81-b364-c3889e8530f3",
  },
};

const prod = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W9xUtvYng",
    APP_CLIENT_ID: "6veevn4el3p4bh3qgjeaug5ok2",
    IDENTITY_POOL_ID: "us-east-1:fb6affaf-249a-4c81-b364-c3889e8530f3",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default config;
