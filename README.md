# quill-delta-test

Problem: Rollup seems to not bundle everything, or everything in the right order. Webpack works ok.

To reproduce:

```
git clone
npm install
npm run build-webpack
npm run build-rollup
npm start
```

Output with webpack:

```
input.js:54 initial data Delta {ops: Array(4)}
14:58:48.867 input.js:17 Creating a diff....
14:58:48.883 input.js:20 new data Delta {ops: Array(5)}
14:58:48.883 input.js:21 diff Delta {ops: Array(2)}
```

Output with rollup:

```
nitial data Delta {ops: Array(4)}
14:50:12.470 output-rollup.js:5409 Creating a diff....
14:50:12.471 output-rollup.js:4829 Uncaught TypeError: Cannot read property 'length' of undefined
    at Iterator.peekLength (output-rollup.js:4829)
    at output-rollup.js:5241
    at Array.forEach (<anonymous>)
    at Delta.diff (output-rollup.js:5222)
    at MyDelta.update (output-rollup.js:5410)
    at output-rollup.js:5453
    at output-rollup.js:5455
Iterator.peekLength @ output-rollup.js:4829
(anonymous) @ output-rollup.js:5241
Delta.diff @ output-rollup.js:5222
update @ output-rollup.js:5410
(anonymous) @ output-rollup.js:5453
(anonymous) @ output-rollup.js:5455
```
