/* eslint-env node */
import babel from '@rollup/plugin-babel';
import replace from 'rollup-plugin-re';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


const plugins = [
//   replace({
//     patterns: [
//       {
//         match: /svgedit-config-es\.js/,
//         test: 'svgedit-config-es.js',
//         replace: 'svgedit-config-iife.js'
//       },
//       {
//         match: /svgedit-config-es\.js/,
//         test: "import svgEditor from './editor/svg-editor.js';", // Sets `svgEditor` global for extensions/locales
//         replace: `import svgEditor from './editor/svg-editor.js';
// window.svgEditor = svgEditor;
// window.svgEditor.modules = false;
//         `
//       }
//     ]
//   }),
  babel({
    babelHelpers: 'bundled'
  }),
  nodeResolve(),
  commonjs()
];

export default [
  {
    input: 'input.js',
    output: {
      format: 'iife',
      file: 'output-rollup.js'
    },
    plugins
  }
];
