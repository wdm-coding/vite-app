import path from 'path';
import {funA} from './ignore.js'
import testJson from './test.json'
funA()
console.log('hello rollup666',testJson,path.join(__dirname,'src'));
