const quickAndDirtyEmailRegex = /^[^@]+@[^.]{2,}\..{2,}$/;

const quickUsernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;

export const validateEmail = email => !!email.match(quickAndDirtyEmailRegex);

export const validateUsername = username => !!username.match(quickUsernameRegex);

export const validatePassword = password => password.length >= 10;

export const validatePasswordAgain = (password, passwordAgain) => validatePassword(password) && password === passwordAgain;
