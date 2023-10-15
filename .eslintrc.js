const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.eslint.json',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'jsx-no-lambda': 0,
    semi: [2, 'always'],
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'object-shorthand': [0, 'never'],
    quotes: 0,
    '@typescript-eslint/no-var-requires': 0,
    'member-ordering': 0,
    'object-literal-sort-keys': 0,
    'no-shadowed-variable': 0,
    'no-consecutive-blank-lines': 0,
    'no-string-literal': 0,
    'jsx-no-multiline-js': 0,
    'jsx-boolean-value': 0,
    'arrow-parens': 0,
    'no-implicit-dependencies': 0,
    'no-submodule-imports': 0,
    'no-case-declarations': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'jsx-alignment': 0,
    'jsx-wrap-multiline': 0,
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/order': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0, // ts already checks case sensitive imports
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-param-reassign': 1,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/role-has-required-aria-props': 0,
    'jsx-a11y/role-supports-aria-props': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/no-children-prop': 0,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'off',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 0,
    'redux-saga/yield-effects': 0,
    'require-yield': 0,
  },
};
