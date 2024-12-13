import globals from 'globals';
import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  },
  {
    ignores: ['node_modules'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...pluginVue.configs['flat/recommended'],
  js.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          useTabs: false,
          printWidth: 120,
          semi: true,
          singleQuote: true,
        },
      ],
    },
  },
];
