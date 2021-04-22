---
title: What is wren-web?
author: Nailuj29
author_title: Author of wren-web
author_url: https://github.com/nailuj29gaming
tags: [wren, web, wren-web]
description: This post should help you understand what wren-web is
hide_table_of_contents: false
---
# What is wren-web?
wren-web is a very simple and minimal web framework for the Wren scripting language. It is still very early in development, so expect lots of changes.

## Well, what is Wren?
Wren is a tiny, embeddable scripting language similar to Lua, but with classes and many other features that make it great.

# A simple example
A simple example for wren-web (it is subject to change) is:
```wren
import "web" for Routes, App

Routes.GET("/greet/:name") { | params | 
    return "Hello, %(params["name"])"
}

App.run(3000)
```
This tiny example demonstrates all the current features of wren-web!