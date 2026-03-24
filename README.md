# Circular Warning on watch
Circular warning on watch bug reproduction for rolldown

## Rollup CIRCULAR_DEPENDENCY

### Build output
```terminal
src/index.js → dist...
(!) Circular dependency
src/a.js -> src/b.js -> src/a.js
created dist in 20ms
```

### Watch output
```terminal
rollup v4.60.0
bundles src/index.js → dist...
(!) Circular dependency
src/a.js -> src/b.js -> src/a.js
created dist in 20ms

[2026-03-24 08:41:05] waiting for changes...
```

## Rolldown CIRCULAR_DEPENDENCY

### Build output
```terminal
[CIRCULAR_DEPENDENCY] Warning: Circular dependency: src/a.js -> src/b.js -> src/a.js.

<DIR>/index.js  chunk │ size: 0.06 kB
<DIR>/b.js      chunk │ size: 0.09 kB
<DIR>/a.js      chunk │ size: 0.16 kB

✔ rolldown v1.0.0-rc.11 Finished in 11.37 ms
```
### Watch output
```terminal
✔ Rebuilt dist in 6.00 ms.
```