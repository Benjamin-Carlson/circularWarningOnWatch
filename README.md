# circularWarningOnWatch
Bug reproduction for rolldown — circular dependency warnings are not emitted (neither on regular build nor on watch mode), unlike rollup which correctly reports them.

## Setup

```sh
npm install
```

## Reproduce

### rollup — emits circular dependency warning ✅

```sh
npm run build:rollup
```

Expected output includes:
```
(!) Circular dependency
src/a.ts -> src/b.ts -> src/a.ts
```

### rolldown — no circular dependency warning ❌

```sh
npm run build:rolldown
```

No circular dependency warning is printed, even though `src/a.ts` and `src/b.ts` form a cycle.

## Watch mode

```sh
npm run watch:rollup   # rollup watch — shows circular warning on rebuild
npm run watch:rolldown # rolldown watch — no circular warning on rebuild
```

## Project structure

```
src/
  index.ts   — entry point, imports from a.ts
  a.ts       — imports from b.ts  (circular!)
  b.ts       — imports from a.ts  (circular!)
rollup.config.js
rolldown.config.js
```
