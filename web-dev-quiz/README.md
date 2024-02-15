# Web development quiz

## async and defer execution order

- A `<script async src='async2.js' />` loads in 50ms
- B `<script async defer src='asyncdefer1.js' />` loads in 60ms
- C `<script async src='async1.js' />` loads in 300ms
- D `<script defer src='defer1.js' />` loads in 200ms
- E `<script defer src='defer2.js' />` loads in 300ms

- let's see first how js script is loaded and executed normally
  ![js loading](./images/js-load.png)

  - there we can see that, while parsing the html in main thread , parser will see the javascript file link, then it stops parsing and starts loading javascript after taht it executes javascript then continues parsing html

- let's see with async
  ![async load](./images/async-load.png)

  - there we can see while laoding script parser in the meantime continues parsing the html also after it full load script executes js then continues parsinmg again

- let's see with defer
  ![defer-load](./images/defer-load.png)

  - there we can see that when parser sees the script tag file, it in the maintime of parsing also loads the script but does not execute that , after html is fully parsed then it executes the script

- now after getting enough informations, let's see our example's execution order

  ![exec-order](./images/exec-order.png)

  - there what we see , like in teh order above,

## Rendering Pipeline and Compositing

- A - The render tree contains all elements from the DOM and CSSOM combined.

- B - Compositing is the process of separating layers based on z-index, which are then
  combined to form the final image displayed on the screen.

- C - The layout process assigns colors and images to the visual elements in the render tree.

- D - The composting process happens on the compositor thread.

- E - Elements that aren't visible on the page, for example display: hidden, aren't part of the
  DOM tree.

- Answers: D

## Resolving Domain Requests

- Browser sends request to **1 Recursive DNS Resolver**
  **1 Recursive DNS Resolver** queries **2 Root Name Server**
  **2 Root Name Server** responds with **4 Top Level Domain Name Server** IP address
  **1 Recursive DNS Resolver** queries **4 Top Level Domain Name Server**
  **5 Top Level Domain Name Server** responds with **5 Authoritative Name Server** IP address
  **1 Recursive DNS Resolver** queries **5 Authoritative Name Server**
  **5 Authoritative Name Server** responds with website's **3 IP Address**

- let's see the process
  ![browser-DNS resolver](./images/browser-RecursionDNSresolver.png)
  ![dns to root name server](./images/dns-rootNameServer.png)  
  ![DNS -> TLD name server](./images/dns-TLD.png)
  ![DNS-ANS](./images/dsn-ANS.png)
  ![ipAddress](./images/ip%20return.png)
  ![connection set](./images/connectionSet.png)

## Call Stack & Event Loop

```javascript
setTimeout(() => console.log(1), 0); // console.log(1) -> get's to task queue

Promise.resolve().then(() => console.log(2)); // console.log(2) goes to micro task queue

Promise.resolve().then(() => setTimeout(() => console.log(3), 0)); -> // setTimeout goes to microtask queue

new Promise((resolve, reject) => {
  console.log(4);
}); // this one instantly calles so first console is 4

setTimeout(() => console.log(5), 0); // this one goes to macro task queue

// now we start from emptying the microtask queue
// first in micro task queue is console function it does it's job and in the console 2
// then we have set time out in micro , it get's executed and setTimeout 's fucntion goes to task queue
// the our micro task is empty, let's start from task queue
// nwo first fucntion in task queue is 1
// second is 5
// third one is 3 which was at first setTimeOut in promise then went to macrop task again
```

```javascript
// 4
// 2
// 1
// 5
// 3
```

## Resource Hints

- dns-prefetch - performs domain name resolution in the background
- preconnect - proactively performs DNS resolution and TCP/TLS handshake
- prefetch - requests non-critical resources in the background
- preload - prioritizes fetching of critical resources needed for the current navigation

## Object Reference & Destructuring

```javascript
const member = {
  name: 'Jane',
  address: { street: '101 Main St' },
};
const member2 = { ...member };
member.address.street = '102 Main St';
member.name = 'Sarah';

console.log(member2); // { name: "Jane", address: { street: "102 Main St" }}
```

![object](./images/obbject.png)

## Put the PerformanceNavigationTimings in the right order

- 6. loadEventStart
- 5. domComplete
- 4. domContentLoadedEventStart
- 1. fetchStart
- 2. connectEnd
- 3. domInteractive

## Match the caching directives to their definitions

- A. no-cache
  - validates a cached response with the origin server before using it, even if it is still fresh
    ![img](./images/no-cache.png)
    ![img](./images/no-cache-1.png)
    ![img](./images/no-cache-2.png)
- B. must-revalidate
  - validates a stale response with the origin server before using it
    ![img](./images//musd-revalidate.png)
    ![img](./images//musd-revalidate-1.png)
    ![img](./images//musd-revalidate-2.png)
- C. no-store
  - doesn't cache any part of the request or response
    ![img](./images/no-store.png)
- D. private
  - prevents caching on shared caches
    ![img](./images/private.png)
- E. stale-while-revalidate
  - serves stale content while validating the cached response with the origin server
    ![img](./images/state-while-revalidate.png)
    ![img](./images/state-while-revalidate-1.png)
    ![img](./images/state-while-revalidate-12.png)

## What statements are true about this code block?

```js
function addMember(name) {
  return { name, createdAt: Date.now() };
}

let obj1 = addMember('John');
let obj2 = addMember('Sarah');

obj1.friend = obj2;
obj2.friend = obj1;

obj1 = null;
obj2 = null;
```

- A. obj1 and obj2 cannot be garbage collected, leading to a memory leak
- B. obj1 and obj2 will be garbage collected immediately after setting them to null
- C. obj1 and obj2 will only be garbage collected after closing the browser tab
- true = D. obj1 and obj2 can be garbage collected during the next garbage collection cycle ![GC](./images/garbage-collector.jpg)

## When animating the following properties, which have the correctly listed rendering costs?

- A. width: Layout, Paint, Composite +
- B. opacity: Paint, Composite -
- C. background-image: Composite -
- D. left: Layout, Paint, Composite +
- E. transform: Paint, Composite -

## What gets logged when clicking button?

```js
<div class="outer">
  <div class="inner">
    <button>Click me!</button>
  </div>
</div>

 ---------

outer.addEventListener("click", () => log("A"), true);
outer.addEventListener("click", () => log("B"));
inner.addEventListener("click", () => log("C"), true);
inner.addEventListener("click", (e) => {
   log("D");
   e.stopPropagation();
   log("E");
});
button.addEventListener("click", () => log("F"));
button.addEventListener("click", () => log("G"), true);

A
C
G
F
D
E
```

## Order the CSS selectors by ascending specificity

- A. div h1.large-text::before
- B. div h1:first-child
- C. h1:not(.small-text)
- D. .large-text:nth-child(1)
- E. h1.large-text[id="title"]
- F. h1.large-text#title

![CSS](./images/CSS-CPECIFICITY.jpg)
![CSS](./images/css.png)

## What statements are true?

```js
const userTokenMap = new WeakMap();

let user = {
  name: 'Jane Doe',
  age: 24,
};

userTokenMap.set(user, 'secret_token');
```

- A. userTokenMap implements the iterator protocol
- B. When setting user to null, userTokenMap returns 0
- True - C. If the user object is set to null, its userTokenMap entry can be be garbage collected.
- D. [...userTokenMap] returns an array of userTokenMap entries
