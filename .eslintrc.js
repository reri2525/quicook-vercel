module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')], //next/babelはここでextendsに書くとlint-stagedが通らない。
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
  },
};
