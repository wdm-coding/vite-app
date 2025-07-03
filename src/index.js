import path from 'path'
import {funA} from '@/ignore.js'
import testJson from '@/test.json'
import React from 'react'
import url from '@/assets/logo.jpeg'
console.log(React,url)
funA()
console.log('hello rollup666',testJson,path.join(__dirname,'src'))
