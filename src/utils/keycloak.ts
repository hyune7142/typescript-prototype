import KeyCloak from 'keycloak-js';

const config = {
  url: "http://192.168.30.56:9180/auth",
  realm: 'igloo',
  clientId: 'ai_front',
}

const keycloak = KeyCloak(config);

export default keycloak;