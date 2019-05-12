import dbQuery from '../db/db';

export const mapUserFields = userResult => ({
  userId: userResult.user_id,
  username: userResult.username,
  email: userResult.email,
  createdAt: userResult.created_at,
  updatedAt: userResult.updated_at,
});

export const selectUserQuery = `
SELECT
  user_id,
  username,
  email,
  created_at,
  updated_at
FROM coaster_users
`;

export const findUserByEmail = async (email) => {
  const params = [email];
  const queryFn = () => `
  ${selectUserQuery}
  WHERE email = $1;
  `;
  const resultRows = await dbQuery(queryFn, params);
  return resultRows.length > 0 ? mapUserFields(resultRows[0]) : null;
};

export const findUserByUsername = async (username) => {
  const params = [username];
  const queryFn = () => `
  ${selectUserQuery}
  WHERE username = $1;
  `;
  const resultRows = await dbQuery(queryFn, params);
  return resultRows.length > 0 ? mapUserFields(resultRows[0]) : null;
};

export const findUserById = async (userId) => {
  const params = [userId];
  const queryFn = () => `
  ${selectUserQuery}
  WHERE user_id = $1;
  `;
  const resultRows = await dbQuery(queryFn, params);
  return resultRows.length > 0 ? mapUserFields(resultRows[0]) : null;
};

export const findUserBySignInWord = async (signInWord) => {
  const params = [signInWord];
  const queryFn = () => `
  SELECT
    user_id,
    username,
    email,
    created_at,
    user_password,
    updated_at
  FROM coaster_users
  WHERE username = $1
    OR email = $1;
  `;
  const resultRows = await dbQuery(queryFn, params);
  if (resultRows.length === 0) {
    return null;
  }
  const userResult = resultRows[0];
  return {
    userId: userResult.user_id,
    username: userResult.username,
    email: userResult.email,
    createdAt: userResult.created_at,
    updatedAt: userResult.updated_at,
    password: userResult.user_password,
  };
};

export const insertNewUser = (username, email, password, salt, createdAt) => {
  const updatedAt = createdAt;
  const params = [username, createdAt, email, password, salt, updatedAt];
  const queryFn = () => `
  INSERT INTO coaster_users
    (username, created_at, email, user_password, salt, updated_at)
  VALUES
    ($1, $2, $3, $4, $5, $6);
  `;
  return dbQuery(queryFn, params);
};
