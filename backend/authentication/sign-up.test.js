import { expect } from 'chai';
import { createPassword } from './cryptography';
import { makeSignUpValidityAssertions } from './assert';

const validCredentials = {
  username: 'OkayName',
  email: 'okay@emails.com',
  password: 'secretPasswordIsLongEnough1',
  userByEmail: undefined,
  userByUsername: undefined,
};

describe('Should create hashed password and salt', async () => {
  const plaintext = validCredentials.password;
  const { hash, salt } = await createPassword(plaintext);
  expect(hash).to.not.be.undefined;
  expect(hash).to.be.a('string');
  expect(hash).to.not.be.empty;
  expect(salt).to.not.be.undefined;
  expect(salt).to.be.a('string');
  expect(salt).to.not.be.empty;
});

describe('Sign up assertion will throw error for non-valid cases', () => {
  it('Should be valid', async () => {
    const { username, email, password, userByEmail, userByUsername } = validCredentials;
    const validity = makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(validity).to.be.true;
  });

  it('Should not be valid if userByEmail is defined', () => {
    const invalidUser = { ...validCredentials, userByEmail: { username: 'abc' } };
    const { username, email, password, userByEmail, userByUsername } = invalidUser;
    const assertion = () => makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(assertion).to.throw();
  });

  it('Should not be valid if userByUsername is defined', () => {
    const invalidUser = { ...validCredentials, userByUsername: { username: 'abc' } };
    const { username, email, password, userByEmail, userByUsername } = invalidUser;
    const assertion = () => makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(assertion).to.throw();
  });
});

describe('Sign up assertion will fail with invalid parameters', () => {
  it('Will fail for invalid username', () => {
    const invalidUser = { ...validCredentials, username: 'Räährääh$‚' };
    const { username, email, password, userByEmail, userByUsername } = invalidUser;
    const assertion = () => makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(assertion).to.throw();
  });
  it('Will fail for invalid email', () => {
    const invalidUser = { ...validCredentials, email: 'seppo91@df' };
    const { username, email, password, userByEmail, userByUsername } = invalidUser;
    const assertion = () => makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(assertion).to.throw();
  });
  it('Will fail for invalid password', () => {
    const invalidUser = { ...validCredentials, password: 'password' };
    const { username, email, password, userByEmail, userByUsername } = invalidUser;
    const assertion = () => makeSignUpValidityAssertions(username, email, password, userByEmail, userByUsername);
    expect(assertion).to.throw();
  });
});
