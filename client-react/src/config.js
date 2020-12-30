const dev = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mhqAnffLQ",
    APP_CLIENT_ID: "2u8n8nfi19hlus4o0rolcaoptb",
    IDENTITY_POOL_ID: "us-east-1:3e765d63-9a42-42c4-ab1b-b4ec214cc902",
  },
};

const prod = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mhqAnffLQ",
    APP_CLIENT_ID: "2u8n8nfi19hlus4o0rolcaoptb",
    IDENTITY_POOL_ID: "us-east-1:3e765d63-9a42-42c4-ab1b-b4ec214cc902",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default config;
