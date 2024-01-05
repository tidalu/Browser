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
  - there is probably one of the things I'm most excited about, which is you can get allocation sample.And that'll help you now that you have a memory leak hypothetically,it'll help you figure out what JavaScript code you're using that's actually causing that memory leak.

#### Lighthouse 🚢

- Full website audit
- Check Performance, SEO, Accessibility

#### Also ➕

- Emulate devices
- Simulate network conditions

## Editing Website with chrome DevTools

### Quick Edits

- Editing CSS
  - we can edit css by in the dev tools and can see real time change there what is affecting or not
- Adding CSS Rules
  - we can click on the ➕ and add any rules from scratch ,
- Editing HTML
  - we can click on any element twice and we are able to change, or by clicking right button we can choose _Edit as HTML_ then we will be able to edit freely making new line so on
- ⚡️ Scroll into view
  - we can see the position of the one element on the page without much effort, go and right click on the right mouse button, there you can find _Scroll into view_ , after that the right eleement will be right on the screen
- Console shortcuts
  - we can click on any element and we can access it from console with `$0` and it keeps kind of history, if we need previ elements we can acess like `$1` or `$2` and so on
- Hide and show elements
  - we can go any element and click once on it and press `h` and it will automatically hide the element,or if it is hiddent it will make it appear , or we can just delete from right click setting of mouse
- Simulate state
  - we can do Force element states by just going and clicking on _.hov_ on the _Styles_ subpanel of _Elements_ panel , we can give :
    1. `:active`
    2. `:focus`
    3. `:hover`
    4. `:visited`
    5. `:focus-visible`
    6. `:focus-within`
- ⚡️ Computed styles
  - we can _Computed styles_ subpanel and it shows all the applied css after all css is rendered, like think id celector is stronger that class selector, so in the list we will see the cpecifity given to id like that so on , and we can see box the box model, and rendered fonts also
- ⚡️ HTML breakpoints
  - great tool
  - we can debug with breakpoints
  - we can out break points on the right mouse click :
    [ ] **Break on:**
    1. subtree modification
       a. I want you to pause JavaScript execution.And I want you to show me what JavaScript caused the HTML to change,which is really very powerful.So you have three options, which is whenever the subtree is modified, and if you think about the DOM being a tree, so elements have children,elements of children elements all the way down, right? And so if you go to the HTML, which is the top element, andyou say when the subtree is modified, that will mean anything on the app.
    2. attribute modification
       b. that would be if we did it, let's say on this h1.It wouldn't change if the text changed, butit would change if the ID changed like an attribute
    3. node removal
- Find event listeners
  - you click on a button and it does something and you want to know where that JavaScript comes from.So that's what this third subtab: _Event listeners_ over here event listeners is for.
- ⚡️ Changing color formats
  - we can play with color hex code, or we can use color picker, and see the changes in real time that will be really useful to choose proper one
  - we can use _Color Palette_ which has pre creates palettes by google or smth else
  - we can also switch between any color formats by `Shift + Click` on any color boxes in _Styles_ sub tab which is pretty cool
- ⚡️ Import custom theme
- CSS Specificity
- Accessibility panel
  - view the accessibility tree, ARIA attributes, and computed accessibility properties of DOM nodes

### Using Chrome DevTools as an IDE

- It helps me to think about the Sources tab as an IDE. Pretend it's VSCode or Sublime Text. On the left is the file tree just as you'd expect, in the middle is the editor itself and this IDE has a bunch of debug tools!
- The sources tab is best for debugging more complex problems. It's much easier to edit large amounts of JavaScript, set breakpoints or view an Error stack with this panel.

### having changes to the disk with Workspaces

- if you are working with not vanilla css, html, js, this chrome dev tools ide is not for you,
- it only works when u use pre js html, css
- Chrome DevTools Workspaces allow you to configure an application so that all of the changes you make to the Sources or Elements tab persist to disk. This means you could theoretically use Chrome DevTools as your primary IDE.

## Debugging

- The basic idea is that you can pick a line in your code and highlight it. Whenever that line is about to be executed, the browser will instead pause the execution of the app. Leaving you free to poke around in it's current state for as long as you'd like.

- Think about breakpoints like a ultra powerful console.log! Instead of just printing out a single expression, you can spend unlimited time logging unlimited expressions in a stateless environment.
- [] context
  - Set and activate breakpoints
    - DOM breakpoints : they are the list of breakpoints in the DOM(html file)
    - XHR/fetch breakpoints :
      - the basic idea is, if we have an app, and it is doing constand API calls(ex: twitter.com), it is getting our timeline, friends, following list, followers list, all kind of different things , all those things are in one helper function like fetch or smth, and so there will be problem to debug when we have something wring in API calls, if we set a breakpoint on that helper function, we should go through every calls, and takes much time, so we can add breakpoint on _XHR/fetch breakpoints_ sectionby clicking on ➕ sign on the top right corner, and we can only break when the line fetching is contains only `some URL`
    - Breakpoints : it is the list of all the breakpoints
  - Use the debugger keyword
  - Walk the call stack
  - Set conditional breakpoints
  - Set XHR breakpoints

## Network Performance

### Page load market research

- Interesting facts about page load time

  > Walmart and Amazon both observed a 1% increase in earnings for every 100 milliseconds of improved webpage speed.
  > Yahoo saw a 9% increase in traffic to every 400 milliseconds of webpage speed improvement.]
  > Google loses 20% of their traffic for every additional 100 milliseconds it takes for a page to load.

- _Network_ tab: mainly we see there requests, their names, status code, type, initiator, size, time , waterfall
  - on the stack of requests if we hold `Shift` and hover over on the request , it differenciates the request childs and parents, childrens(the one that we are hovering has colled many requests , that are it's childrens) are in red, parent(that proper one that we are hovering on is called by this parent which is green bg-colored) is in green
  - and we have waterfall: And then you get this really cool waterfall.So this is what happens when you hover over these here.You get this waterfall, And the waterfall like if you have a request that's takinga really long time, the waterfall can help you figure out where in the process thatrequest is getting stuck
  - we can add many more sub tab properties for requests stack
  - And again, just to give a bit of context here before we go into the waterfallterminology we've
    kind of seen like a script and or an HTML file,we'll call scripts we'll call CSS call images, all
    these things, butit's really important to know that on the browser level,you get like a certain
    number of requests, which is, I believe, either five orsix depending on the browser that you can do at one time.
  - So if you tried to call like 20 images, it would send out six requests, you know,for the six
    first images.And then as they come down, then it would start filling like a queue basically
    whereI would call the next images.So it's worth knowing right away that you can't just do unlimited requests.

### The Network waterfall

- Letrs talk about the life of a network request
  - [ ] ◻️ Queueing
    - There are higher priority requests.
    - There are already six TCP connections open for this origin, which is the limit. Applies to HTTP/1.0 and HTTP/1.1 only.
    - The browser is briefly allocating space in the disk cache
  - [ ] ⬜️ Stalled
    - The request is stuck Queueing
  - [ ] 🟩 DNS Lookup
    - Resolving an IP address
  - [ ] 🟧 Initial Connection
    - TCP handshakes or establishing SSL
  - [ ] 🟧 Service Worker Startup
    - Starting up a Service Worker
  - [ ] 🟪 Service Worker respondsWith
    - Service Worker sending data to browser
  - [ ] 🟩 Waiting (TTFB)
    - Waiting for the first byte from the server
  - [ ] 🟦 Content Download
    - Browser is receiving a response from a server

### JS Parse cost

- We spend so much time on compressing and combining JS into dense bundless so they travel across network faster ! but that is not the whole story
  [worthy to read](https://medium.com/reloading/javascript-start-up-performance-69200f43b201)

- Measuring real user performance

  - first we had getTime

  ```javascript
  const start = new Date().getTime();

  for (let i = 0; i < 100000; i++) {
    // do nothing
  }

  const end = new Date().getTime();

  console.log(end - start);
  ```

  - then we got console.time

  ```javascript
  console.time('do nothing');

  for (let i = 0; i < 100000; i++) {
    // do nothing
  }

  console.timeEnd('do nothing');
  ```

  - now we has performance mark and measure

  ```javascript
  performance.mark('Start');

  for (let i = 0; i < 1000000000; i++) {
    // Do nothing
  }

  performance.mark('End');

  performance.measure('Frontend Masters Chrome Devtools', 'Start', 'End');

  performance.getEtriesByType('measure');
  ```

  - You may measure so many thiings using [performance API]("https://developer.mozilla.org/en-US/docs/Web/API/Performance")

  ```javascript
  const resources = performance.getEntriesByType('resource');
  const paints = performance.getEntriesByType('paint');
  const navigations = performance.getEntriesByType('navigation');
  ```

## CPU

### Rail - [ response animation Idle Load ]

- Responce
  - Represents the time it takes for a system or application to respond to user interactions. This could include actions like button clicks, form submissions, or other user-triggered events. A responsive application ensures that users receive feedback promptly, enhancing the overall user experience.
- Animation
  - Encompasses the resources and processing required to display animations on a webpage. This includes loading images, sprites, or other assets needed for the animation, as well as the computational power required for smooth animation playback. Optimizing animation load involves balancing visual quality with performance considerations.
- Idle
  - IIn the context of web page performance, idle time refers to periods when the browser is not actively engaged in high-priority tasks. Utilizing idle time effectively can involve optimizing performance, loading additional resources, or performing background tasks. Techniques like requestIdleCallback in JavaScript can be used to schedule tasks during idle periods without affecting the user experience.
- Load

  - Refers to the process of loading a web page or application. This includes fetching and rendering HTML, CSS, JavaScript, and other resources necessary for the page to become fully interactive. The time it takes for a page to load is crucial for user experience, and optimizing this process is often a focus in web development.

- Page Rail time measures
  > 0 to 16ms : Users are exceptionally good at tracking motion, and they dislike it when animations aren't smooth. They perceive animations as smooth so long as 60 new frames are rendered every second. That's 16 ms per frame, including the time it takes for the browser to paint the new frame to the screen, leaving an app about 10 ms to produce a frame.
  > 0 to 100ms : Respond to user actions within this time window and users feel like the result is immediate. Any longer, and the connection between action and reaction is broken.
  > 100 to 1000ms : Within this window, things feel part of a natural and continuous progression of tasks. For most users on the web, loading pages or changing views represents a task.
  > 1000 ms or more : Beyond 1000 milliseconds (1 second), users lose focus on the task they are performing.
  > 10000 ms or more : Beyond 10000 milliseconds (10 seconds), users are frustrated and are likely to abandon tasks. They may or may not come back later.

### Page Jank

> Jank is any stuttering, juddering or just plain halting that users see when a site or app isn't keeping up with the refresh rate.
> Jank refers to sluggishness in a user interface, usually caused by executing long tasks on the main thread, blocking rendering, or expending too much processor power on background processes.

### 60 FPS

### Pragmatic Approaches

### Request animation frame

### Web Workers

### Running DevTools on Node.js apps

## Memory

## Auditing
