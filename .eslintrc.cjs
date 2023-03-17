const config = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react$', '^react-dom/', '^next$', '^@?\\w'],
              // Absolute imports and Relative imports.
              ['^@/', '^\\.'],
              // Side effect imports.
              ['^\\u0000'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
}

module.exports = config
