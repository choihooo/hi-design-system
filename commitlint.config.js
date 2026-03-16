module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enum: allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation changes
        'style',    // Code style changes (formatting, etc.)
        'refactor', // Code refactoring
        'test',     // Adding or updating tests
        'chore',    // Maintenance tasks
        'perf',     // Performance improvements
        'ci',       // CI/CD changes
        'build',    // Build system changes
        'revert',   // Revert a previous commit
      ],
    ],

    // Type case: enforce lowercase
    'type-case': [2, 'always', 'lower-case'],

    // Type empty: type is required
    'type-empty': [2, 'never'],

    // Scope case: enforce lowercase
    'scope-case': [2, 'always', 'lower-case'],

    // Subject case: allow any case
    'subject-case': [0],

    // Subject empty: subject is required
    'subject-empty': [2, 'never'],

    // Subject full stop: no period at end
    'subject-full-stop': [2, 'never', '.'],

    // Header max length: maximum 100 characters
    'header-max-length': [2, 'always', 100],

    // Body max line length: maximum 100 characters per line
    'body-max-line-length': [2, 'always', 100],

    // Footer max line length: maximum 100 characters per line
    'footer-max-line-length': [2, 'always', 100],
  },
  parserPreset: {
    parserOpts: {
      breakingPattern: /^(\w+)(?:\(([^)]+)\))?!:/,
    },
  },
};
