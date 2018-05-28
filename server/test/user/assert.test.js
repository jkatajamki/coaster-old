import {
  assertSignUpIsValid,
} from '../../services/user/assert';

const username = 'Validname';
const email = 'valid@email.com';
const password = 'validPasswd123';
const rubbish = [
  null,
  '',
  undefined
];

describe('user assertion functions', () => {
  it('passes with valid sign-up data', () => {
    const response = assertSignUpIsValid(username, email, password);

    expect(response).toBe(true);
  });

  it('fails with invalid usernames', () => {
    [
      'Rubbishname.',
      'Rubbishname!',
      'rubbish name',
      'Rubbishname?',
      'Ru',
      'RubbishnameRubbishnameRubbishname',
      ...rubbish,
    ].map(name => {
      expect(() => {
        assertSignUpIsValid(name, email, password);
      }).toThrow();
    });
  });

  it('fails with invalid emails', () => {
    [
      'clearlynotanemail',
      'rubbish@emailcom',
      'rubbishemail.com',
      'rubbish@email.c',
      ...rubbish
    ].map(rubbishEmail => {
      expect(() => {
        assertSignUpIsValid(username, rubbishEmail, password);
      }).toThrow();
    });
  });

  it('it fails with shite passwords', () => {
    [
      'shite',
      ...rubbish,
    ].map(shitePwd => {
      expect(() => {
        assertSignUpIsValid(username, email, shitePwd);
      }).toThrow();
    });
  });
});
