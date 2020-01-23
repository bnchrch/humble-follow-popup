import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'HumbleFollow',
      sourcemap: true
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({ browser: true, preferBuiltins: true }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component']
      }
    }),
    babel(),
    builtins()
  ]
}

// import resolve from 'rollup-plugin-node-resolve';
// import commonJS from 'rollup-plugin-commonjs'
// import babel from 'rollup-plugin-babel';
// import replace from 'rollup-plugin-replace'

// export default {
//   input: 'index.js',
//   output: {
//     file: 'dist/index.js',
//     format: 'iife',
//     name: 'HumbleFollow'
//   },
//   plugins: [
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     }),
//     resolve(),
//     commonJS({
//       include: 'node_modules/**',
//       namedExports: {
//         'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement']
//       }
//     }),
//     babel()
//   ]
// };
