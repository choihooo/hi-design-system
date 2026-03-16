# HI Design System - Merge Rules

## Overview

This document defines the merge rules and quality gates for the HI Design System repository to ensure code quality and stability.

## 🚫 Branch Protection Rules

### Protected Branches
- **main** - Production branch
- **develop** - Development branch (if exists)

### Required Checks Before Merge

#### 1. CI/CD Pipeline (All must pass)
- ✅ **CI / Lint** - Code linting must pass
- ✅ **CI / Type Check** - TypeScript type checking must pass
- ✅ **CI / Test** - Unit tests must pass with 80%+ coverage
- ✅ **CI / Build** - Build must succeed
- ✅ **E2E Tests** - End-to-end tests must pass

#### 2. Code Quality Gates
- ✅ **Code Quality Analysis** - No critical complexity issues
- ✅ **Commit Lint** - All commits must follow Conventional Commits

#### 3. Security
- ✅ **CodeQL Security Analysis** - No critical security vulnerabilities
- ✅ **Dependency Security Audit** - No critical vulnerabilities

### Required Reviews
- 👥 **1 approval required** from repository maintainer
- 👤 **Dismiss stale reviews** when new commits are pushed

### Additional Restrictions
- ❌ **Do not allow bypassing settings** - Even for administrators
- 🔒 **Require linear history** - No merge commits, only squash/rebase
- 📝 **Require conversation resolution** - All discussions must be resolved

## 📋 Merge Requirements

### Before Merging
1. **All CI checks must pass** (green ✅)
2. **At least 1 approval** from maintainer
3. **Up-to-date branch** - Must be latest from target branch
4. **No unresolved conversations** - All comments/discussions resolved
5. **Conventional Commits** - All commit messages follow format

### Merge Method
- **Squash and merge** - Preferred for clean history
- **Rebase and merge** - Alternative for preserving individual commits
- ❌ **Merge commit** - Not allowed (creates diamond history)

## 🔍 Quality Gates

### Code Coverage
- **Minimum**: 80% coverage required
- **Enforcement**: PRs below 80% cannot be merged

### Code Complexity
- **Maximum Cyclomatic Complexity**: 15
- **Maximum Function Length**: 100 lines
- **Maximum Nesting Depth**: 4 levels
- **Maximum Parameters**: 4 parameters

### Security
- **Critical Vulnerabilities**: 0 allowed
- **High Vulnerabilities**: 0 allowed
- **Moderate Vulnerabilities**: Review required, may block

## 🚨 Blocking Rules

### PRs That Cannot Merge
1. ❌ Failing CI checks
2. ❌ Below 80% code coverage
3. ❌ Critical security vulnerabilities
4. ❌ Non-conventional commit messages
5. ❌ Unresolved review comments
6. ❌ Missing maintainer approval
7. ❌ Outdated branch (>7 days behind target)

## 📝 Merge Checklist

Use this checklist before merging:

- [ ] All CI checks passed (Lint, Type Check, Tests, Build, E2E)
- [ ] Code coverage ≥ 80%
- [ ] No critical security vulnerabilities
- [ ] Code quality gates passed
- [ ] At least 1 maintainer approval
- [ ] All conversations resolved
- [ ] Branch is up-to-date with target
- [ ] Commit messages follow Conventional Commits
- [ ] PR description is clear and complete
- [ ] Related issues linked (if applicable)
- [ ] Documentation updated (if needed)

## 🔧 Automatic Rules (Enforced by GitHub)

### Branch Protection Settings
```yaml
main branch:
  required_status_checks:
    strict: true  # Require branches to be up-to-date
    contexts:
      - CI / Lint
      - CI / Type Check
      - CI / Test
      - CI / Build
      - E2E Tests
      - Code Quality Analysis
      - Commit Lint
      - CodeQL Security Analysis
      - Dependency Security Audit

  enforce_admins: true
  required_pull_request_reviews:
    required_approving_review_count: 1
    dismiss_stale_reviews: true
    require_code_owner_reviews: false
  restrictions: null
  allow_force_pushes: false
  allow_deletions: false
```

## 🎯 Merge Process

### 1. Create PR
- Use Conventional Commits in title
- Describe changes clearly
- Link related issues
- Add appropriate labels

### 2. Automated Checks
- CI runs automatically
- Quality gates enforced
- Security scans executed
- PR comments generated

### 3. Review Process
- Maintainer reviews code
- Requests changes if needed
- Approves when satisfied

### 4. Merge
- All checks must pass
- Conversations resolved
- Approval received
- Squash and merge

### 5. Post-Merge
- Automatic version bump (if applicable)
- CHANGELOG updated
- Release created (if applicable)

## 🚀 Automation

These rules are enforced automatically through:
- **GitHub Branch Protection** - Prevents invalid merges
- **CI/CD Pipelines** - Run quality checks
- **Dependabot** - Handles dependency updates
- **Semantic Release** - Automates releases

## 📚 Related Documents

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [CLAUDE.md](../.claude/CLAUDE.md) - AI development guide
- [commitlint.config.js](../commitlint.config.js) - Commit message rules

---

**Last Updated**: 2026-03-16
**Version**: 1.0.0
