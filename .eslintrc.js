module.exports = {
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
  },
};
