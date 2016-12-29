// Rollup plugins.
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
// import serve from 'rollup-plugin-serve'

export default {
  dest: 'build/app.js',
  entry: 'src/client/js/index.js',
  // format: 'umd',
  plugins: [
    babel({
      babelrc: false,
      exclude: ['node_modules/**', '**/**/*.scss'],
      presets: [ [ 'es2015-rollup'], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    resolve({
      jsnext: true,
      browser: true,
      main: true
    }),
    cjs(
      {
        exclude: 'node_modules/process-es6/**',
        namedExports : {
                         'node_modules/react/react.js' : ['Component', 'Children', 'createElement', 'PropTypes'],
                         'node_modules/react-dom/index.js' : ['render']
                     },
        include: [
          'node_modules/**'
          // 'node_modules/fbjs/**',
          // 'node_modules/object-assign/**',
          // 'node_modules/react/**',
          // 'node_modules/react-dom/**',
          // 'node_modules/symbol-observable/**',
          // 'node_modules/redux/**',
          // 'node_modules/react-redux/**',
          // 'node_modules/redux-thunk/**'
        ]
      }
    ),
    scss(),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') })

    // ,serve('build')
  ],
  sourceMap: true
}
