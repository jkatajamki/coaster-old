import { assertSignUpIsValid } from '../../services/user/assert';

const username = 'Validname';
const email = 'valid@email.com';
const password = 'validPasswd123';
const rubbish = [
  null,
  '',
  undefined,
];

describe('user assertion functions', () => {
  it('passes with valid sign-up data', () => {
    const response = assertSignUpIsValid(username, email, password);

    return expect(response).toBe(true);
  });

  it('fails with invalid usernames', () => {
    const names = [
      'Rubbishname.',
      'Rubbishname!',
      'rubbish name',
      'Rubbishname?',
      'Ru',
      'RubbishnameRubbishnameRubbishname',
      ...rubbish,
    ];

    names.map(name => expect(() => assertSignUpIsValid(name, email, password)).toThrow());
    return undefined;
  });

  it('fails with invalid emails', () => {
    const names = [
      'clearlynotanemail',
      'rubbish@emailcom',
      'rubbishemail.com',
      'rubbish@email.c',
      ...rubbish,
    ];

    names.map(rubbishEmail => expect(() =>
      assertSignUpIsValid(username, rubbishEmail, password)).toThrow());
    return undefined;
  });

  it('does not fail with correct usernames or emails', () => {
    const names = [
      'Okayname',
      'okayname',
      'okay-name',
    ];
    names.map(okayName => expect(() =>
      assertSignUpIsValid(okayName, email, password)).not.toThrow());

    const emails = [
      'okay@email.com',
      'also.okay@email.com',
      'still@very.okay.com',
      'no@issues.here',
    ];
    emails.map(okayEmail => expect(() =>
      assertSignUpIsValid(username, okayEmail, password)).not.toThrow());

    return undefined;
  });

  it('it fails with shite passwords', () => {
    [
      'shite',
      ...rubbish,
    ].map(shitePwd => expect(() => assertSignUpIsValid(username, email, shitePwd)).toThrow());

    return undefined;
  });
});
