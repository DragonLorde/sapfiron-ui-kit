import typescript from 'rollup-plugin-typescript2'
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      plugins: [],
    },
  ],
  plugins: [
    del({ targets: 'build' }),
    babel({ presets: ['@babel/preset-react'] }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/stories', '**/*.stories.tsx', '**/__tests__', '**/*.test.ts', '**/setupTests.js', '**/assets/*.tsx'],
      },
    }),
  ],
}
