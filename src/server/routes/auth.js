const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const config = require('../config');

function authRoutes(app) {
  const router = express.Router();
  app.use('/auth', router);

  router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, data) => {
      try {
        if (error || !data) {
          next(boom.unauthorized());
        }

        req.login(data, { session: false }, async (error) => {
          if (error) {
            next(error);
          }

          const { token, ...user } = data;

          res.cookie('token', token, {
            httpOnly: !config.dev,
            secure: !config.dev,
            maxAge: 60000,
          });

          res.status(200).json(user);
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

};

module.exports = authRoutes;
