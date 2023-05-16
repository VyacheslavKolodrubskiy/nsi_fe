const STATEMENT_TYPES = [
  'function',
  'block-like',
  'multiline-const',
  'multiline-let',
]

module.exports = {
  extends: [
    // https://eslint.vuejs.org/
    'plugin:vue/vue3-essential',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  plugins: [
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort',
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    slotData: true,
  },
  env: { node: true },
  rules: {
    // 'no-undef': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'no-const-assign': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-template': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', ...STATEMENT_TYPES],
      },
      {
        blankLine: 'always',
        prev: STATEMENT_TYPES,
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'import',
        next: ['const', 'let'],
      },
    ],
    'prefer-const': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        varsIgnorePattern: '^(_|(emit|props)$)',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/valid-define-emits': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/no-useless-template-attributes': 'off',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/no-undef-properties': ['error', { ignores: ['/^\\$/', 'rid'] }],
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['component'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        endOfLine: 'auto',
        singleAttributePerLine: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.{vue,js}'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^vue',
                '^@?\\w',
                '^(components)(/.*|$)',
                '^\\u0000',
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
                '^(assets)(/.*|$)',
                '^.+\\.?(css|scss)$',
              ],
            ],
          },
        ],
      },
    },
  ],
}
