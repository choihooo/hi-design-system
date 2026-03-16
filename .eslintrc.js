module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:complexity/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'sonarjs', 'complexity'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // Code complexity rules
    'complexity/complexity': ['warn', 15], // Maximum cyclomatic complexity
    'max-lines-per-function': ['warn', 100], // Maximum lines per function
    'max-depth': ['warn', 4], // Maximum nesting depth
    'max-params': ['warn', 4], // Maximum function parameters
    'max-statements': ['warn', 30], // Maximum statements per function

    // SonarJS rules for code quality
    'sonarjs/cognitive-complexity': ['warn', 15], // Maximum cognitive complexity
    'sonarjs/no-duplicate-string': 'warn', // Detect duplicate strings
    'sonarjs/no-identical-functions': 'warn', // Detect identical functions
    'sonarjs/no-collapsible-if': 'error', // Remove collapsible if statements
    'sonarjs/no-all-duplicated-branches': 'error', // All duplicated branches
    'sonarjs/max-switch-cases': 'warn', // Too many switch cases
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      // Test files can have higher complexity
      files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      rules: {
        'complexity/complexity': ['off'],
        'max-lines-per-function': ['off'],
        'sonarjs/cognitive-complexity': ['off'],
      },
    },
    {
      // Configuration files can be simpler
      files: ['**/*.config.{js,ts}', '**/.eslintrc.js'],
      rules: {
        'complexity/complexity': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
