---
sidebar_position: 2
---
# Installation
Currently, there is no official pre-built binaries for wren-web. However, the process to build it from source is very straightforward

You will need
- Git
- Go 1.16 or newer
- That's it!

The first step in building is to download the source code. Run this at the terminal:
```
$ git clone https://github.com/wren-web/wren-web
$ cd wren-web
```

Then all you have to do is build and install wren-web
```
$ go install
```

This will install it to `~/go/bin`, so this directory must be in your `PATH`