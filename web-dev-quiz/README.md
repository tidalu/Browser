# Web development quiz

## Put the scripts in the right order of execution?

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

## Which statements are true?

- A - The render tree contains all elements from the DOM and CSSOM combined.

- B - Compositing is the process of separating layers based on z-index, which are then
  combined to form the final image displayed on the screen.

- C - The layout process assigns colors and images to the visual elements in the render tree.

- D - The composting process happens on the compositor thread.

- E - Elements that aren't visible on the page, for example display: hidden, aren't part of the
  DOM tree.

- Answers: D

## resolving domain requests

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
