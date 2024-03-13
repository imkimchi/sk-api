import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'vanilla/main.js', // Replace with the actual path to your JavaScript file
  output: 
    [{
        file: 'dist/sk-api.min.js',
        format: 'iife',
        name: 'skApi',
        plugins: [terser()]
    },
    {
        file: 'dist/sk-api.js', 
        format: 'iife', 
        sourcemap: true,
        name: 'skApi'
    }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-env',
          {

          },
        ],
      ],
    }),
  ],
};
