# How Browser Work

## Introduction

> We will learn what will happen when we write `google.com` in the address bar until we see the Google page on the background screen. We will learn all the background jobs here!

### The browsers we will talk about

- Now we have major Browsers on desktop:

  1. **Chrome** (Open Source)
  2. **Edge**
  3. **Safari** (Partly Open source)
  4. **FireFox** (Open Source)
  5. **Opera**

- On Mobile

  1. **Chrome**
  2. **Safari**
  3. **Samsung Internet**
  4. **Opera**
  5. **UC Browser**

- All of them except Opera are based on WebKit.
- On the market according to [StatCounter Statistic](https://gs.statcounter.com/browser-market-share#monthly-202301-202401), Chrome is on top [2023-2024]: `64.73%`
  - Safari: `18.56%`
  - Edge: `4.97%`
  - FireFox: `3.36%`
  - Opera: `2.86%`
  - Samsung Internet: `2.59%`

### The browser's main functionality

- The main functionality of the browser is to represent the web source we choose by requesting it from the server and displaying it on the Window.
  - The resource is usually an HTML document, but it may also be any other type, like PDF, img, audio, video.
  - Location of the resource is specified by the user using \*[URI]: Uniform Resource Identifier
- The way how Browser interprets and displays HTML file is specified in HTML and CSS specifications, They are maintained by \*[W3C]: World Wide Web Consortium. It is responsible for developing and maintaining web standards.
- Today most browsers have a lot in common with each other,

  1. Address bar for inserting URI
  2. Back and forward buttons
  3. Refresh and stop buttons for refreshing and stopping the loading of the current document
  4. Home button that takes to your home page
  5. Bookmarking options

- Lets talk about **URI** **URN** **URL**

  - **URL**
  - Uniform Resource Locator is a specific type of URI
  - It is commonly used to specify the location of a webpage, file, or a service
  - It provides a standardized format for accessing resource on the Web
  - It consists of several parts
  - `http://www.example.com:8080/resource/page.html?param1=value1&param2=value2#section1`

    1. scheme

        - `http://`
        - `https://`
        indicates the protocol used to access the resource

    2. Host

        - `www.example.com`
        specifies the domain name or IP address of the server hosting the resource

    3. Port: _optional_

        - `8080`
        specifies the specific port number on the host that the resource is accessed through, it port is not defined, it defaults to the standard port for the given scheme. The default port for `http` is `80`, while for `https` it is `443`

    4. Path: _optional_

        - `/resource/page.html`
        just specify the specific location of the resource on the server. It includes dirs and file names

    5. Query Parameters: _optional_

        - `param1=value1&param2=value2`
        they are additional parameters passed to the resource and are typically used in dynamic web applications.
        they are in the form of key=value

    6. Fragment Identifier: _optional_

        - `#section1`
        refers to a specific section or anchor within the webpage, it is identified with `#` symbol, and followed by the identifier. It is commonly used to link to a specific section of the webPage

    7. Authority

        - `Host + Port`
        if a URL has no authority, the scheme and the rest of the URL will be separated by only a colon. An example is an email without an email address such as `mailto:info@example.com`

    - Examples of URL:
      - `https://www.example.com/index.html`
      - `http://api.example.com/data`
      - `ftp://ftp.example.com/files/document.pdf`
      - `mailto:info@example.com`
      - `mailto:user@example.com?subject=Hello&body=Hi%20there`

  - **URN**
  - **URI**

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
