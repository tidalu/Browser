# Advanced web app optiomizations

## Problems

- Latency
  - time delay between when a data packet is sent and when it is recieved , expressed in milliseconds.

## Metrics & Tools

- We cannot inprove but we can measure

### Browser-Centric metrics

- Time to first Byte (TTFB)
- First Paint
- Page Load - When everythign ready on the screen Page load is fired,

- Browser centric metrics are not so important for Web performance Optimizations

### User-Centric metrics

- first Interactive - when main thread is released, at least after couple of ms, browser is actually single thread, if thread is occuppied by something else, we cannot execute anything,
- Speed index -
- time to interactive - when we can at least can interact
- Current Layout Shift
- Largest Contentful Paint - (LCP) - initial load
- Custom metric -

### Core Web vitals

- Calculated over the 75th percentile over mobile and web
  ![Core web Vitals](./imagees/core%20web%20vitals.png)

  - Largest Contentful Paint - (LCP) - initial load
  - First input delay - (FID) - interactivity
  - Cumulative Layout Shift - CLS - Visual stability
  - Interaction to Next paint - responsiveness\

### GOALS

- LCP : 2.5s - 4.0s
- FID: 100ms - 300ms
- CLS: 0.1 - 0.25

- analyses :
  - [PageSpeed Insights](pagespeed.web.dev)
  - [Performance issues and optimizations](https://www.webpagetest.org/)

## Basic Optimizations

- Browsing the web

  - Network Layer
  - Parsing
  - Resource discovery Phase
  - Recourse Prioritize
  - Layout
  - Paint

- www.frontendmasters.com
- 1 - DNS query - browser needs an ip address - ~~~ 100ms
- 2 -TCP connection - 120ms
- 3 -SSL negotiation - 150ms
- 4 -HTTP Request - uplink

  - header - body

- 5 - Server process (backend time) - 200ms to 500ms
- 6 - HTTP Response - downlink
  - header - body
- 7 - Browsers HTML Parsing
- 8 - Resource Discovery & Priority
- Render(layout and paint)

- Why every website should be https not http,
  > learn this more

---

#### HTTP/1.1

- One request per TCP connection
  - if i open, i can request only one file
  - if i need request in paralled like example 8 files , i should open 8 times in a row ,
  - GZIP Encoding is accepted

#### HTTP/2

- Performance from scratch
- Header Copressions
- TCP connections reuse
- TLS based only
- Good compatibility
- upgrade your servers or user a CDN
- Upgrade connections

#### HTTP/3

- Transport protocol over UDP
- Reduces latency and connection messages
- HTTP/2 Interface with TLS

### Browser cache

- Resouce discovery Queue

  - Cache headers per file

    - Absolute expiration date (1.0)
    - Relative expiration date (1.0)
    - More specs / values

  - Browser needs a resource
    - It checks the cache
      - Cache Miss: we will go to network
      - Cache HIT:
        - it is expired
          - conditional request: asks server hey server i have this file in this version then server responds with :
            - not modified (it can attach updated cache headers)
            - okay new file(200)
        - it is not expired
          - we use the file from the cache

## Advanced Optimizations

## Performance APIs
