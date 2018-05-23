const quickAndDirtyEmailRegex = /^[^@]+@[^.]{2,}\..{2,}$/;

const quickUsernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

const validateEmail = email => !!email.match(quickAndDirtyEmailRegex);

const validateUsername = username => !!username.match(quickUsernameRegex);

const validatePassword = password => password.length >= 10;

const validatePasswordAgain = (password, passwordAgain) =>
  validatePassword(password) && password === passwordAgain;

export { validateEmail, validateUsername, validatePassword, validatePasswordAgain };
