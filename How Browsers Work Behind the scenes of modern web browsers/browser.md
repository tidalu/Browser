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

      1. <a id="scheme"></a>**Scheme**

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
           if a URL has no authority, the scheme and the rest of the URL will be separated by only a colon. An example is an email without an authority such as `mailto:info@example.com`

      - Examples of URL:
        - `https://www.example.com/index.html`
        - `http://api.example.com/data`
        - `ftp://ftp.example.com/files/document.pdf`
        - `mailto:info@example.com`
        - `mailto:user@example.com?subject=Hello&body=Hi%20there`

  - **URN**

    - stands for Uniform Resource Name
    - type of URI
    - Unlike the URL which specifies teh address or location of a resource, a URN provides a persistent identifier that remains unchanged even if the resource is moved or its location changes
    - main purpose

      - to serve long lasting identifier for a resource
      - ensuring that the identifier remains valid over time
      - typically used for resources that require long term persisitence and consistent identification
      - mosly on academic papers , digital books , or cultural artifacts

      - Structure of A URN

        - `urn:isbn:0-486-27557-4`

          1. URN
             `urn`
             Indicates that the identifier is a Uniform resource Name

          2. Namespace
             `isbn`
             represents the unique namespace or identifier system that defines ans governs URN. It provides context and ensures the uniqueness of the identifier
             Examples:  
              `ISBN` : International Standard Book Number
             `ISSN` : International Standard Serieal Number

          3. Identifier
             `0-486-27557-4`
             it is a string of characters that uniquely identifies the resource within the specific namespaces

        - Examples of URN

          - `urn:isbn:0-486-27557-4`
            A URN identifying a book with the given ISBN number.

          - `urn:ietf:rfc:3986`
            A URN identifying an RFC (Request for Comments) document with the specified number.

          - `urn:oid:2.16.840`
            A URN identifying an object using an OID (Object Identifier) in a specific namespace.

  - **URI**

    - stands for Uniform Resource Identifier
    - it is a string of characters that identifies a specific resource, such as a webpage, a file or a service

    - Consists of two main points

      1. Scheme: [definition](#Scheme)

      2. Resource Identifier: identifies the specifir resource being accessed or referenced. The format of the resource identifier depends on the scheme being used

    - URI mostly follows the same format as that if URLs
    - However , while URL allows you to locate the resource , a URL simple identifies a resource. This means the URI si not necessarily intended as an address to get a resource

    - Examples of URIs

      1. URL (Uniform resource Locator)
         - `https://www.example.com/index.html`
         - `http://api.example.com/data`
         - `ftp://ftp.example.com/files/document.pdf`
         - `mailto:info@example.com`
         - `mailto:user@example.com?subject=Hello&body=Hi%20there`
      2. URN (Uniform resource Name)

         - `urn:isbn:0–486–27557–4`
         - `urn:ietf:rfc:3986`
         - `urn:oid:2.16.840`

      3. Data URI

         - `data:text/plain;base64,SGVsbG8gV29ybGQh`
         - `data:image/jpeg;base64,/9j/4AAQSkZJRgAB…`

      4. Tel URI ( for tel numbers )

         - `tel:+1234567890`
         - `tel:555–123–4567`

      5. File URI
         - `file:///path/to/file.txt`
         - `file:///C:/Documents/document.docx`

### The browser's high-level structure

- Main components are:

  1. The User Interface

     - Address bar
     - Back/forward button
     - Bookmarking menu
     - etc. Every part of the browser display except the window where you see the requested page

  2. The Browser Engine

     - Marshals actions between UI and the rendering engine

  3. The rendering engine

     - Responsible for displaying requested content. For example, if the requested content is HTML, the rendering engine parses the HTML and CSS and displays the parsed content on the screen

  4. Networking

     - It is for network calls and requests such as HTTP requests

  5. UI backend

     - Used for drawing basic widgets like combo boxes and windows. This method exposes a generic interface that is not platform-specific. Underneath it uses operating system user interface methods

  6. Javascript interpreter

     - Used to parse and execute code

  7. Data storage

     - This is a persistent layer. The browser may need to store all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexDB, WebSQL, and fileSystem

  ![Browser Components](/How%20Browsers%20Work%20Behind%20the%20scenes%20of%20modern%20web%20browsers/images/browser-components.png)

- note that browsers such as Chrome run multiple instances of rendering engine : one for each tab, Each tab runs in a separate process

## The rendering engine

- responsiblity is to display the content of the request on the browser screen
- by default , it can display HTML and XML documents and images. It can also display other types of data via plugins and extensions

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
