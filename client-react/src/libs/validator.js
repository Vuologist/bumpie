export const isEmailValid = (email) => {
  let emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailValidation.test(email);
};

export const isPasswordValid = (password) => {
  let passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return passwordValidation.test(password);
};

export const isPasswordMatch = (passwordNew, passwordConfirm) => {
  return passwordNew === passwordConfirm;
};
