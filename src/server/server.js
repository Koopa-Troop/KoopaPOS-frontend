const express = require('express');
const webpack = require('webpack');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const main = require('./routes/main').default;
const config = require('./config');
const authRoutes = require('./routes/auth');

const DEV = config.dev;
const PORT = config.port || 3000;

const app = express();
app.use(express.static(`${__dirname}/public`));

// body parser
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

//  Basic strategy
require('./utils/auth/strategies/basic');

// Twitter strategy
require('./utils/auth/strategies/twitter');

// Google strategy
require('./utils/auth/strategies/google');

// Facebook strategy
require('./utils/auth/strategies/facebook');

if (DEV) {
  console.log('loading dev config');
  // eslint-disable-next-line global-require
  const webpackConfig = require('../../webpack.config');
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true },
    historyApiFallback: true,
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loadiing ${DEV ? '' : 'not'} development config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.get('/cookie', (req, res) => {
  res.json({ hola: req.cookies });
});
authRoutes(app);

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });
    res.cookie('email', user.email, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('name', user.name, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('id', user.id, {
      httpOnly: false,
      secure: false,
    });

    res.redirect('/');
  },
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile', 'openid'],
  }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });
    res.cookie('email', user.email, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('name', user.name, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('id', user.id, {
      httpOnly: false,
      secure: false,
    });

    res.redirect('/');
  },
);

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res, next) => {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
      httpOnly: !config.dev,
      secure: !config.dev,
    });
    res.cookie('email', user.email, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('name', user.name, {
      httpOnly: false,
      secure: false,
    });
    res.cookie('id', user.id, {
      httpOnly: false,
      secure: false,
    });

    res.redirect('/');
  },
);

app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`server running on ${PORT}`);
});
