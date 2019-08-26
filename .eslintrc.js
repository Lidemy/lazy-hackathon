module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-tabs":"off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "padded-blocks": "off",
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
  },
};
