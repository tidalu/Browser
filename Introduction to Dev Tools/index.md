# Introduction to Dev Tools

## History of DevTools

### Opening Developer Tools

- To open developer tools, right-click on a website and select "Inspect" or use the keyboard shortcuts:
  - Mac: `Command+Option+C`
  - Windows, Linux, Chrome OS: `Control+Shift+C`

### Checking the Value

- If you want to check the value of something, use the `alert` function in the console.

### Hixie's Live Dom Viewer

Explore [Hixie's Live Dom Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) for additional tools and utilities in web development.

## A wal through the panels

### Note

- Chrome extensions often mess with the DevTools data, leading to inaccurate reporting! If you're going to run any important audits, make sure you have all of your extensions disabled or use an Incognito tab!

### Panels

#### Elements 🧪

- View and interact HTML and CSS
  - we can double click on the HTMl elements and edit the element and also in one click we can see the Styles,
    we can change the value, we can also change the property itself
  - we can add another css properties, by clicking on the ➕ on the right top of the DevTools on _Styles_ subPanel
  - we can even Drag and Drop the HTMl element

#### Network 🌐

- View all files sent from the server
  - Mainly what we see when we refresh the page while on the _Network_ panel, we can see stack of all the requests sent
  - we hit the server and the server always gives index.html, which is on the top of the stack reqs, named **About** and type is _document_
  - the browser goes through html, and if there any refs to another files or servers it place these also to the stack after each other, like could be css, js , or anything
  - we can actually diagnose alot of cool things, including server issues all from the _Network_ panel of the DevTools
- Measure page load performance
  - we can alo check the each files time tool to load, and main two most need times: `DomContentLocaled: ...ms` and `Load: ...ms` on the bottom of the DevTools
- Watch your site load in real-time
  - we can watch it by clicking on the setting cog of the _Network_ panel, and enable capture screenshots , and we can see the every part of loading , like HTMl comes not styled, so on so on we can see all such stuff in real time
- Inspect request/response data
  - when aminly we are working on site project with some APIs , when it is not working, they will often ask data about headers sent either by the API od to the API
  - we can see the headers on by clicking on the any needed from the stack , and go to the _Headers_ sub panel, and we can see pretty much thighs like
    - [ ] General
      1. Request URL
      2. Request method
      3. Status Code
      4. Remote address
      5. Referrer Policy
    - [ ] Responce headers
      1. Accept-Ranges
      2. Access-Control-Allow-Origin
      3. Age
      4. Alt-Svc
      5. Cache-Control
      6. Content-Length
      7. Content-Security-Policy-Report-Only
      8. Content-Type
      9. Cross-Origin-Opener-Policy
      10. Cross-Origin-Resource-Policy
      11. Date
      12. Expires
      13. Last-Modified
      14. Report-To
      15. Server
      16. Timing-Allow-Origin
      17. X-Content-Type-Options
      18. X-Xss-Protection
    - [ ] Request headers _default_
      1. Accept
      2. Accept-Encoding
      3. Accept-Language
      4. Connection
      5. Host
      6. If-Modified-Since
      7. If-None-Match
      8. Referer
      9. Sec-Ch-Ua
      10. Sec-Ch-Ua-Mobile
      11. Sec-Ch-Ua-Platform
      12. Sec-Fetch-Dest
      13. Sec-Fetch-Mode
      14. Sec-Fetch-Site
      15. User-Agent
    - this will come in handy when we will home some kind of reques ID,
      some way of identifying it. Service team will often ask for that ID,
      cuz they wanna be able to look it up in their logs and see what went
      wrong , something like that

#### Performance 🙀

- Record CPU and Memory
  - we click on the record button, we interact with the usagepage , then stop , then it will show the result
- Inspect threads
  - Analyze and investigate threads to understand their behavior and performance.
- Spot page jank
  - Identify and locate instances of page jank or performance issues.

#### Console 🎮

- JavaScript REPL
- Interact with the DOM to the _Elements_ tab and click on any element then comeback to console, and write $0 which logs the last element u pressed and we can minipulate it
  - go

#### Security 🔒

- Check that requests use HTTPS
  - it is pretty straightforward , gives us overview
- View certificates
- View any TLS/SSL issues

#### Sources 📘

- A full IDE
- Step through debugger
  - instead of just logging, we will be able to put a breakpoint
  - we will be able pause the whole executioni stack at that break point and kind of move around.
  - we can check the call stack, like how we got there, what functions got called.
  - we can keep an eye on certain variables like watch a variable and see how changes it overtime
  - we can also use this really cool thing called workspaces, we can drag our project into the dev tools, and after we set it up correctly, everything that we edit will actually persist to disk
- Persist changes to disk

#### Application 💼

- Application storage
  - So this is where you'll come probably primarily to look at allthe different ways we have of like caching and serving things locally
  - So that's like local storage, session data, cookies, index db,all sorts of stuff like that.
- Check PWA features
- Clear cache

#### Memory 🤔

- Generate memory snapshots
  - this one is very specific to your memory consumption.
  - But it's really cool, so you can take a heap snapshot,which is like show how memory is currently being used in my app.
- Find and fix memory leaks
  - there is probably one of the things I'm mostexcited about, which is you can get allocation sample.And that'll help you now that you have a memory leak hypothetically,it'll help you figure out what JavaScript code you're using that's actually causing that memory leak.

#### Lighthouse 🚢

- Full website audit
- Check Performance, SEO, Accessibility

#### Also ➕

- Emulate devices
- Simulate network conditions

## Editing

## Debugging

## Network Performance

## CPU

## Memory

## Auditing
