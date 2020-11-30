export const isEmailValid = (email) => {
  let emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailValidation.test(email);
};
