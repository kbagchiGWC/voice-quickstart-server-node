const jwt = require('jsonwebtoken');
const tokenGenerator = require('../src/token_generator');

test('generates a new token', () => {
  const identity = 'alice';

  const token = tokenGenerator(identity);
  const decoded = jwt.decode(token, { complete: true });

  expect(decoded).toHaveProperty('payload.grants', {
    identity: identity,
    voice: { outgoing: {application_sid: process.env.APP_SID}, push_credential_sid:process.env.PUSH_CREDENTIAL_SID }
  });
});
