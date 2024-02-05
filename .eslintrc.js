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
        project: './next/app/tsconfig.json',
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')], //next/babelはここでextendsに書くとlint-stagedが通らない。
    },
  },
};
