# macaca-electron-app

[![node version][node-image]][node-url]
[![build status][travis-image]][travis-url]

[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

[travis-image]: https://img.shields.io/travis/macacajs/dom-event-simulate.svg?style=flat-square
[travis-url]: https://travis-ci.org/Super-Ps/macaca-electron-app

Test electron. App

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://s2.ax1x.com/2019/09/21/nvhcaq.png" width="100px;"/><br/><sub><b>Super-Ps</b></sub>](https://github.com/Super-Ps)<br/>|
| :---: |

## start
```bash
$ npm i
$ npm run build   
$ npm run dist  
```
Select dmg,mac.zip or exe installation in dist directory, and then find the installation path to replace the binary parameter under the chromeOptions object of demo.test.js  

- Mac:
```bash
$ npm run mac-start 
```  
```bash
$ npm run test 
```  

- Win:
```bash
$ npm run win-start 
```   
```bash
$ npm run win-server  
```  
```bash
$ npm run test   
```  

## License

The MIT License (MIT)






