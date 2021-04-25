---
title: What is SpiderWren?
author: Nailuj29
author_title: Author of SpiderWren
author_url: https://github.com/nailuj29gaming
tags: [wren, web, SpiderWren]
description: This post should help you understand what SpiderWren is
hide_table_of_contents: false
---
# What is SpiderWren?
SpiderWren is a very simple and minimal web framework for the Wren scripting language. It is still very early in development, so expect lots of changes.

## Well, what is Wren?
Wren is a tiny, embeddable scripting language similar to Lua, but with classes and many other features that make it great.

# A simple example
A simple example for SpiderWren (it is subject to change) is:
```wren
import "web" for Routes, App

Routes.GET("/greet/:name") { | params | 
    return "Hello, %(params["name"])"
}

App.run(3000)
```
This tiny example demonstrates all the current features of SpiderWren!