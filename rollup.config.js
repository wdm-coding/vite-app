console.log('环境',process.env);
const {mode,NODE_ENV} = process.env;
import json from '@rollup/plugin-json';
export default{
    input:'./src/index.js', // 入口文件路径
    output:{ // 输出配置
      file: process.env.NODE_ENV ==='development' ? 'dist/dev.js' : 'dist/prod.js', // 输出文件路径
      format: mode==='local' ? 'es' : 'umd' // 输出格式，可选值有amd,cjs,esm,iife,umd等
    },
    watch:{
      include:'src/**'
    },
    plugins:[
      json()
    ]
}