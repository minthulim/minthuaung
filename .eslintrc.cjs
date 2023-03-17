const fs = require('fs')

const foldersUnderSrc = fs
  .readdirSync('.', {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const config = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort'],
  overrides: [
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
              [`^(${foldersUnderSrc.join('|')})(/.*|$)`, '^\\.'],
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
