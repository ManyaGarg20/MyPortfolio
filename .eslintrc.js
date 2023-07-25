module.exports = {
  env: {
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    // eslint-disable-next-line no-dupe-keys
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
  },
};
