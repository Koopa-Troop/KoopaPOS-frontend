const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const config = require('../../../config/index');

passport.use(
  new GoogleStrategy({
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: `${config.appUrl}/auth/google/callback`,
  },
  async (accessToken, refreshToken, { _json: profile }, done) => {
    try {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: 'post',
        data: {
          name: profile.name,
          email: profile.email,
          password: profile.sub,
          apiKeyToken: config.apiKeyToken,
        },
      });

      if (!data || status !== 200) {
        done(boom.unauthorized(), false);
      }

      done(null, data);
    } catch (err) {
      done(err);
    }
  }),
);
