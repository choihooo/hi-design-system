# HI Design System - Monorepo Optimization Guide

## Overview

This document describes the optimizations implemented to improve build times, CI/CD efficiency, and developer experience for the HI Design System monorepo.

## Implemented Optimizations

### Phase 1: Build & Cache Optimization ✅

**Turborepo Remote Cache Configuration**
- Enabled remote cache with signature verification in `turbo.json`
- Configured CI pipeline to cache Turborepo artifacts between runs
- Expected improvement: 40-60% faster builds on cache hits

**CI Cache Integration**
- Added Turborepo cache restore/save steps to GitHub Actions
- Cache key based on `turbo.json` hash for automatic invalidation
- Applied to all CI jobs (lint, type-check, build)

### Phase 2: Package Build Output Configuration ✅

**Build Configuration Updates**
- `@hi-design/react`: Updated to output `dist/hi-design.es.js` with proper types
- `@hi-design/types`: Added tsup build configuration for proper dist output
- `@hi-design/tokens`: Added tsup build configuration for proper dist output
- All packages now have proper `main`, `types`, and `exports` fields

**Build Tools Added**
- `tsup`: Fast TypeScript bundler for type-only packages
- Proper `tsup.config.ts` files for types and tokens packages

### Phase 3: Test Optimization ✅

**Turbo Pipeline Inputs**
- Added explicit input patterns for test jobs
- Optimized cache invalidation by only watching relevant files
- Separated `test:parallel` task for parallel execution

**New Test Commands**
```bash
pnpm test:parallel    # Run tests in parallel across packages
pnpm test:affected    # Only test packages affected by changes
```

### Phase 4: Dependency Management ✅

**Dependency Analysis Tools**
- `madge`: Circular dependency detection
- Performance monitoring scripts

**New Analysis Commands**
```bash
pnpm check-circular    # Check for circular dependencies
pnpm dep-health        # Check dependency health
pnpm dep-graph         # Visualize dependency graph
```

### Phase 5: Affected Commands ✅

**Smart Build/Test Commands**
```bash
pnpm build:affected        # Build only changed packages
pnpm test:affected         # Test only changed packages
pnpm lint:affected         # Lint only changed packages
pnpm type-check:affected   # Type check only changed packages
```

**CI Integration**
- All CI jobs now use affected commands for PRs
- Full checks still run on main branch pushes
- Expected improvement: 30-50% faster CI on PRs

### Phase 6: Performance Monitoring ✅

**Performance Measurement**
```bash
pnpm perf:build    # Time full rebuild
pnpm perf:test     # Time full test run
```

**npmrc Optimizations**
- Configured pnpm cache directories
- Added workspace package preferences
- Optimized hoisting patterns for common dev dependencies

## Usage Guide

### Daily Development

```bash
# Development (with hot reload)
pnpm dev

# Build everything (uses cache)
pnpm build

# Build only changed packages (faster for PRs)
pnpm build:affected

# Run tests (uses cache)
pnpm test

# Run tests in parallel
pnpm test:parallel

# Run tests only for changed packages
pnpm test:affected

# Lint everything
pnpm lint

# Lint only changed packages
pnpm lint:affected

# Type check everything
pnpm type-check

# Type check only changed packages
pnpm type-check:affected
```

### CI/CD Workflows

**Pull Request:**
- Lint: affected packages only
- Type Check: affected packages only
- Build: affected packages only
- Uses Turborepo cache from previous runs

**Main Branch Push:**
- All checks run on entire codebase
- Full package build
- Cache updated for next run

### Dependency Management

```bash
# Check for circular dependencies
pnpm check-circular

# View dependency graph
pnpm dep-graph

# Measure build performance
pnpm perf:build

# Measure test performance
pnpm perf:test
```

## Performance Improvements

### Expected Metrics

| Scenario | Before | After | Improvement |
|----------|--------|-------|-------------|
| Cold Build | 100% | 100% | - |
| Cached Build | 100% | 40-60% | 40-60% faster |
| PR CI (avg) | 100% | 50-70% | 30-50% faster |
| Affected Build | 100% | 20-40% | 60-80% faster |

### Cache Strategy

**Local Development:**
- Turborepo uses `.turbo` directory for local cache
- Cache persists between builds on same machine
- Automatic invalidation based on file hashes

**CI/CD:**
- GitHub Actions cache stores `.turbo` directory
- Cache restored at start of job, saved at end
- Shared across all runners in repository

## Configuration Files

### turbo.json
```json
{
  "remoteCache": { "enabled": true },
  "pipeline": {
    "build": {
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "tsconfig.json"]
    },
    "test": {
      "inputs": ["src/**/*.tsx", "**/*.test.ts"]
    }
  }
}
```

### .npmrc
```
store-dir=~/.pnpm-store
cache-dir=.pnpm-cache
prefer-workspace-packages=true
```

### package.json scripts
```json
{
  "build:affected": "turbo run build --filter=[HEAD^1]",
  "test:affected": "turbo run test --filter=[HEAD^1]"
}
```

## Troubleshooting

### Cache Not Working

**Problem:** Builds are slow despite no changes

**Solutions:**
1. Check `.turbo` directory exists and is writable
2. Verify `turbo.json` hasn't changed (invalidates cache)
3. Try `pnpm build --force` to bypass cache
4. Clear cache: `rm -rf .turbo`

### Affected Commands Not Working

**Problem:** `build:affected` builds all packages

**Solutions:**
1. Ensure you're on a git branch
2. Check there's a `HEAD^1` commit to compare against
3. Verify git is initialized: `git rev-parse --git-head`

### CI Cache Misses

**Problem:** CI always does full rebuild

**Solutions:**
1. Check cache action logs in GitHub Actions
2. Verify cache key matches between restore and save
3. Check if `turbo.json` changed between runs
4. Ensure cache permissions are correct

## Best Practices

### Development Workflow

1. **Use affected commands** when working on feature branches
2. **Run full checks** before merging to main
3. **Monitor performance** with `perf:*` commands
4. **Check dependencies** regularly with `check-circular`

### CI/CD Workflow

1. **PRs use affected** commands for fast feedback
2. **Main branch runs** full checks
3. **Cache is managed** automatically by Turborepo
4. **Performance metrics** tracked over time

### Monorepo Management

1. **Keep dependencies** minimal and circular-free
2. **Use workspace protocols** (`workspace:*`) for internal deps
3. **Test changes** locally before pushing
4. **Monitor build times** and investigate regressions

## Future Improvements

### Potential Enhancements

1. **Remote Caching**: Vercel/Cloudflare Turborepo remote cache
2. **Distributed Builds**: Split CI jobs across multiple runners
3. **Incremental Builds**: finer-grained build graph
4. **Package Visualization**: Interactive dependency graph UI
5. **Automated Dependency Updates**: Dependabot + Renovate

### Monitoring

1. **Build time tracking**: Dashboard of build times over time
2. **Cache hit rates**: Monitor cache effectiveness
3. **Package sizes**: Track bundle size changes
4. **Dependency health**: Automated outdated dependency checks

## Related Documentation

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Changesets Versioning](https://github.com/changesets/changesets)
- [Getting Started Guide](./getting-started.md)
- [CLAUDE.md](./.claude/CLAUDE.md)

## Support

For issues or questions:
1. Check this guide's troubleshooting section
2. Review Turborepo documentation
3. Check GitHub Issues for similar problems
4. Create new issue with performance metrics

---

**Last Updated:** 2026-03-16
**Maintained By:** HI Design System Team
