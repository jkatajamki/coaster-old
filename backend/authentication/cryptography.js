import bcrypt from 'bcrypt';

export const createPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return { hash, salt };
}

export const comparePassword = (password, user) => bcrypt.compare(password, user.password);
