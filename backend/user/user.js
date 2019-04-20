import { dbQuery } from '../db/db';

export const findUserByEmail = (email) => {
  const params = [email];
  const queryFn = () => `
  SELECT
    user_id,
    username,
    email,
    created_at,
    updated_at
  FROM coaster_users
  WHERE email = $1;
  `;
  return dbQuery(queryFn, params);
};

export const findUserByUsername = (username) => {
  const params = [username];
  const queryFn = () => `
  SELECT
    user_id,
    username,
    email,
    created_at,
    updated_at
  FROM coaster_users
  WHERE username = $1;
  `;
  return dbQuery(queryFn, params);
};

export const createNewUser = (username, createdAt, email, password, salt) => {
  const updatedAt = createdAt;
  const params = [username, createdAt, email, password, salt, updatedAt];
  const queryFn = () => `
  INSERT INTO coster_users
    (username, created_at, email, user_password, salt, updated_at)
  VALUES
    ($1, $2, $3, $4, $5, $6);
  `;
  return dbQuery(queryFn, params);
};
