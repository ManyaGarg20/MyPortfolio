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
    'import/extensions': 0,
    'intcomma-spacing': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-tag-location': 0,
    'comma-spacing': 0,
    'no-trailing-space': 0,
    'eol-last': 0,
    'no-trailing-spaces': 0,
    'consistent-return': 0,
    ' no-multi-spaces': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-multi-spaces': 0,
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': 0,
    'object-curly-spacing': 0,
    'key-spacing': 0,
    'quote-props': 0,
    'react/no-array-index-key': 0,
    'no-confusing-arrow': 0,
    'jsx-quotes': 0,
    'react/jsx-tag-spacing': 0,
    'indent': 0,
  },
};
