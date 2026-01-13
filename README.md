# frontend-daily-lab

Daily frontend experiments.
Small, focused, and code-first. 🌱

## Structure

```
├─ javascript/   # JS runtime behavior (scope, closure, event loop)
├─ browser/      # Web API experiments (IntersectionObserver, BFCache, etc.)
├─ css/          # Pure CSS components and tricks
├─ react/        # React-specific experiments
└─ utils/        # Utility function implementations (debounce, throttle, etc.)
```

## Rules

- **No build tools** - Pure JS/HTML/CSS (React only when needed)
- **One experiment = One commit**
- **Code first, README second**

## Commit Convention

```bash
git commit -m "lab: <category> - <topic>"
# Examples:
# git commit -m "lab: js - lexical scope shadowing"
# git commit -m "lab: browser - bfcache restore test"
# git commit -m "lab: css - skeleton ui animation"
```
