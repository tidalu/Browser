# How Browser Work

## Introduction

    > we will learn what will happen when we write google.com in the address bar untill we see the Google page on the background screen, we will learn all the background job here!

### The browsers we will talk about

    - Now we have major Browsers on desktop:
        1. __Chrome__ (Open Source)
        2. __Edge__
        3. __Safari__ (Partly Open source)
        4. __FireFox__ (Open Source)
        5. __Opera__

    - On Mobile
        1. __Chrome__
        2. __Safari__
        3. __Samsung Internet__
        4. __Opera__
        5. __UC Browser__

    - All of them except Opera are based on WebKit
    - On the market according to [StatCounter Statistic](https://gs.statcounter.com/browser-market-share#monthly-202301-202401), Chrome is on top[2023-2024]: `64.73%`
        - Safari : `18.56%`
        - Edge: `4.97%`
        - FireFox: `3.36%`
        - Opera:`2.86%`
        - Samsung Internet: `2.59%`

### The browser's main functionality

    - The main functionality of the browser is to represent the web source we choose, by requesting ti from server and displaying it on the Window
        - The recource is usually an HTML document , but it may also be any other type, like PDF, img, audio, video.
        - Location of the recourse is specified by the user using *[URI]: Uniform Resource Identifier
    - The way how Browser interprets and display HTML file is specified in HTML and CSS specifications, They are maintained by *[W3C]: World Wide Web Consortium. It is responsible for developing and maiaintaining web standars
    - Today most browsers have alot in common with each other,
        1. Address bar for inserting URI
        2. Back and forward buttons
        3. Refresh and stop buttons for refreshing and stoppping the loading of current document
        4. Home button that takes to you home page
        5. Bookmarking options

### The browser's high level structure

### Communication_between the components

## The rendering engine

### Rendering engines

### The main flow

### Main flow examples

### Parsing and DOM tree construction

- [x] Parsing - general
  - Grammars
  - Parser - Lexer combination
  - Translation
  - Parsing example
  - Formal definitions for vocabulary and syntax
  - Types of parsers
  - Generating parsers automatically
- [x] HTML Parser
  - The HTML grammar definition
  - Not a context free grammar
  - HTML DTD
  - DOM
  - The parsing algorithm
  - The tokenization algorithm
  - Tree construction algorithm
  - Actions when the parsing is finished
  - Browsers error tolerance
- [x] CSS parsing
  - Webkit CSS parser
- [x] Parsing scripts
- [x] The order of processing scripts and style sheets
  - Scripts
  - Speculative parsing
  - Style sheets

### Render tree construction

- [x] The render tree relation to the DOM tree
- [x] The flow of constructing the tree
- [x] Style Computation
  - Sharing style data
  - Firefox rule tree
    - Division into structs
    - Computing the style contexts using the rule tree
  - Manipulating the rules for an easy match
  - Applying the rules in the correct cascade order
    - Style sheet cascade order
    - Specifity
    - Sorting the rules
- [x] Gradual process

### Layout

- [x] Dirty bit system
- [x] Global and incremental layout
- [x] Asynchronous and Synchronous layout
- [x] Optimizations
- [x] The layout process
- [x] Width calculation
- [x] Line Breaking

### Painting

- [x] Global and Incremental
- [x] The painting order
- [x] Firefox display list
- [x] Webkit rectangle storage

### Dynamic changes

### The rendering engine's threads

- [x] Event loop

### CSS2 visual model

- [x] The canvas
- [x] CSS Box model
- [x] Positioning scheme
- [x] Box types
- [x] Positioning
  - Relative
  - Floats
  - Absolute and fixed
- [x] Layered representation
