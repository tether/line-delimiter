# Line-Delimiter

[![Build Status](https://travis-ci.org/tether/line-delimiter.svg?branch=master)](https://travis-ci.org/tether/line-delimiter)
[![NPM](https://img.shields.io/npm/v/line-delimiter.svg)](https://www.npmjs.com/package/line-delimiter)
[![Downloads](https://img.shields.io/npm/dm/line-delimiter.svg)](http://npm-stat.com/charts.html?package=line-delimiter)
[![guidelines](https://tether.github.io/contribution-guide/badge-guidelines.svg)](https://github.com/tether/contribution-guide)

Transform a stream by serializing chunks and adding line breaks.

## Usage

```js
const transform = require('line-delimiter')

source.pipe(transform()).pipe(dest)
```

This module safely serialize data into JSON strings and avoid circular dependencies.

## Installation

```shell
npm install line-delimiter --save
```

[![NPM](https://nodei.co/npm/line-delimiter.png)](https://nodei.co/npm/line-delimiter/)


## Question

For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/tether/contribution-guide/blob/master/community.md" target="_blank">community guidelines</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

The open source community is very important to us. If you want to participate to this repository, please make sure to read our <a href="https://github.com/tether/contribution-guide" target="_blank">guidelines</a> before making any pull request. If you have any related project, please let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2017 Tether Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
