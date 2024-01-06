# How Browser Work

## Introduction

> We will learn what happens when we type "google.com" in the address bar until we see the Google page on the background screen. We will cover all the background processes involved.

### The Browsers We Will Talk About

- **Desktop Browsers:**

  1. Chrome (Open Source)
  2. Edge
  3. Safari (Partly Open source)
  4. FireFox (Open Source)
  5. Opera

- **Mobile Browsers:**

  1. Chrome
  2. Safari
  3. Samsung Internet
  4. Opera
  5. UC Browser

- All of them, except Opera, are based on WebKit.
- According to [StatCounter Statistics](https://gs.statcounter.com/browser-market-share#monthly-202301-202401), as of 2023-2024, Chrome is on top with a market share of `64.73%`:
  - Safari: `18.56%`
  - Edge: `4.97%`
  - FireFox: `3.36%`
  - Opera: `2.86%`
  - Samsung Internet: `2.59%`

### The Browser's Main Functionality

- The main functionality of the browser is to represent the chosen web source by requesting it from the server and displaying it on the window.

  - The resource is usually an HTML document but may also be any other type (PDF, image, audio, video).
  - The location of the resource is specified by the user using [URI](#).

- The way browsers interpret and display HTML files is specified in HTML and CSS specifications, maintained by [W3C](#) (World Wide Web Consortium), the organization responsible for developing and maintaining web standards.

- Today, most browsers have a lot in common:

  1. Address bar for inserting URI
  2. Back and forward buttons
  3. Refresh and stop buttons for refreshing and stopping the loading of the current document
  4. Home button that takes you to your home page
  5. Bookmarking options

- Let's talk about **URI**, **URN**, **URL**.

  - **URL:**

    - Uniform Resource Locator is a specific type of URI.
    - It is commonly used to specify the location of a webpage, file, or service.
    - It provides a standardized format for accessing resources on the Web.
    - It consists of several parts:

      1. Scheme (`http://`, `https://`): Indicates the protocol used to access the resource.
      2. Host (`www.example.com`): Specifies the domain name or IP address of the server.
      3. Port (Optional, `8080`): Specifies the specific port number on the host.
      4. Path (Optional, `/resource/page.html`): Specifies the location of the resource on the server.
      5. Query Parameters (Optional, `param1=value1&param2=value2`): Additional parameters passed to the resource.
      6. Fragment Identifier (Optional, `#section1`): Refers to a specific section or anchor within the webpage.
      7. Authority (`Host + Port`): Represents the host and port.

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
