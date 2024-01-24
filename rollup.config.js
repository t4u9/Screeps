import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

export default {
    // 源代码的入口是哪个文件
    input: 'src/main.ts',
    // 构建产物配置
    output: {
        // 输出到哪个文件
        file: 'dist/main.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        // 打包依赖
        resolve(),
        // 模块化依赖
        commonjs(),
        // 编译 ts
        typescript({ tsconfig: "./tsconfig.json" }),
    ]
};