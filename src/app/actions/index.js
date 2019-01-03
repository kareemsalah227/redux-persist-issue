// @flow

export const RECEIVED_AUTH_TOKEN = 'RECEIVED_AUTH_TOKEN';

type authTokenType = {
  access_token: string,
};

export function receivedAuthtoken(token: authTokenType) {
  return {
    type: RECEIVED_AUTH_TOKEN,
    payload: token,
  };
}
