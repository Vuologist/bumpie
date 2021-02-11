const dev = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Q4gOXBKbg",
    APP_CLIENT_ID: "1ernd3ldg5ltalrojs1j7bl6tt",
    IDENTITY_POOL_ID: "us-east-1:f436bedb-4767-4132-ac8c-0bf03869a94e",
  },
};

// const prod = {
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_mhqAnffLQ",
//     APP_CLIENT_ID: "2u8n8nfi19hlus4o0rolcaoptb",
//     IDENTITY_POOL_ID: "us-east-1:3e765d63-9a42-42c4-ab1b-b4ec214cc902",
//   },
// };

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? dev : dev;

export default config;
