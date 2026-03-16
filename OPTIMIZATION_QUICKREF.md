# Monorepo Optimization - Quick Reference

## 🚀 Quick Commands

### Daily Development
```bash
# Start development with hot reload
pnpm dev

# Build everything (cached)
pnpm build

# Build only changed packages (faster!)
pnpm build:affected

# Test everything
pnpm test

# Test in parallel (faster!)
pnpm test:parallel

# Test only changed packages (fastest!)
pnpm test:affected
```

### Before Merging
```bash
# Full build check
pnpm build

# Full test suite
pnpm test:all

# Lint everything
pnpm lint

# Type check everything
pnpm type-check
```

### Performance & Analysis
```bash
# Check circular dependencies
pnpm check-circular

# View dependency graph
pnpm dep-graph

# Measure build performance
pnpm perf:build

# Measure test performance
pnpm perf:test
```

## 📊 What Changed

### ✅ Implemented Optimizations

| Phase | Description | Improvement |
|-------|-------------|-------------|
| 1 | Turborepo cache + CI cache | 40-60% faster builds |
| 2 | Package build outputs | Proper dist/ artifacts |
| 3 | Test optimization | Parallel + affected runs |
| 4 | Dependency analysis | Circular dep detection |
| 5 | Affected commands | 60-80% faster on PRs |
| 6 | Performance monitoring | Track improvements over time |

### 🎯 New Commands

```bash
pnpm build:affected      # Build changed packages only
pnpm test:affected       # Test changed packages only
pnpm lint:affected       # Lint changed packages only
pnpm type-check:affected # Type check changed packages only
pnpm test:parallel       # Run tests in parallel
pnpm check-circular      # Find circular dependencies
pnpm dep-graph           # Visualize dependency graph
pnpm perf:build          # Time your build
pnpm perf:test           # Time your tests
```

## 🔧 Troubleshooting

### "Cache not working"
```bash
# Clear Turborepo cache
rm -rf .turbo

# Rebuild with fresh cache
pnpm build
```

### "Affected commands build everything"
```bash
# Check git history
git log --oneline -5

# Ensure you're on a feature branch
git checkout -b feature/my-feature
```

### "CI is slow"
- Check cache action logs in GitHub
- Verify `turbo.json` hasn't changed
- Ensure cache permissions are correct

## 📖 Full Documentation

See [MONOREPO_OPTIMIZATION.md](./MONOREPO_OPTIMIZATION.md) for complete details.

## 🎉 Expected Results

- **Local builds**: 40-60% faster with cache
- **PR builds**: 30-50% faster with affected
- **CI builds**: 30-50% faster with remote cache
- **Developer experience**: Faster feedback loops

---

**Quick Tip**: Use `pnpm build:affected` during development for maximum speed!
