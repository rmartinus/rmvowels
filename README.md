# rmvowels

## What it does
Remove vowels from sentences.

## Example
```
That was awesome!
```
becomes:
```
Tht ws wsm!
```

## Usage
This library only supports [ECMAScript Modules](https://nodejs.org/api/esm.html#modules-ecmascript-modules). You will need to use import instead of require.

```javascript
import { rmvowels } from "@rmartinus/rmvowels";

console.log(rmvowels('Hello there!'));
```