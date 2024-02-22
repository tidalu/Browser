## Background

- We don't have a definition for web apps
  W3C have different definitions for different APIs
  There are many concepts around:

  - **hide/minimize**: in memory and with
    some execution rights
  - **suspend/freeze**: in memory
    with no execution rights
  - **close/kill/discard**: not in memory
    We will try to simplify it

- **Background:** when the user
  stops or pauses the usage of
  the web app

## Web app life cycle

- Possibilities

  - User goes to a new tab
  - User goes to a new window
  - User minimizes the window
  - User closes the window
  - User closes the browser or PWA

- What happens on mobile OS's with app's lifecycle in general?

  - like just think, we do not exist button, like in desktops, actually we do not have that,

- On desktop OS

  - if we have one app open but others are minimized , in desktop they won't stop, they run, if u use alt-tab to change tab, it just changes the tab, does not pause the previous one,

  - in mobile
    - it is like in general actally the opposite of the desktop cycle, if we use one app, and the rest are open in the background, it means in Mobile OS , they are rest are paused, what we see in the recent app list, they are not running they will be shown in just screenshots. or we can say that paused one 'suspended mode'
    - but it may happen that some apps will not be suspended,

- we can see this action in web apps and PWAs

## Observing desktop background Javascript

- We will be starting spying in the background
  - FPS
  - Timers
  - Web Worker execution
  - Service worker execution

![chrome](./images/chrome.png)

- well we see there that an app is open in chrome, and everything is working well, if we switch the tab FPS, request animation frame , thay will be down, and timer will kindof stop also, but web worker and service worket will not stop
  in Safari they all be stopped , so people say it saves more battery, that is why.

- Browser Apps in Desktopn OS(windows, mac, LInux, chrome os)

  - if the app us **Not visible**
    - because of:
      - Background Tab
      - background browser
      - Background PWA
      - Totally covered
    - in that case
      - All apps opened (visible or not)
        - are in memory with execution right
      - web apps not visible
        - may limit timer (1s to 10s)
        - may suspend them(typicaly on chromium alternative)
        - Service worker has its own lifecycle

- Background apps in Mobile OS(iOS, iPadOs)

  - it they are not visible because of:
    - lock screen
    - Home screen
    - Open another app
    - open another tab
  - in that case
    - Web apps in the background
      - Page navigations in memory or not
      - UI is jsut a screenshot, not updated
      - 2s, or 300seconds of executiuon after leaving foreground
      - ifPWA still in memory, opening other PWA s also gove our background PWA execution rights

- BACKGROUND APPS IN MOBILE OSs (Android)

  - not visible
    - Lock screen
    - Home screen
    - Multitask
    - Open other app
    - Open other tab
  - Web apps in the Background
    - Page Navigations in memory or not
    - UI is just a screenshot, not updated
    - Chrome: Up to 5 minutes of execution in background (30s+ for Service Worker)
    - Firefox: Page is stopped immediately, SW: 30s, Worker: 3 minutes

- Summary
  ![bg-summary](./images/background-sm.png)

- Execution rights in the BAckground [options avaiable today]

  - Google Play Store PWA
    - Trusted Web Activity for PWA and native code for background
  - App Store PWA
    - WebView for the user interface in the PWA and Native code for background (it can be JS)
  - Service Worker Background APIs
    - Additions that will be possible in the browser and with installed PWAs (it works on Play Store PWAs also)
  - Audio and Video playing
    - Let the web app run in the background providing video and audio data to keep it playing in the background

- Service worker background APIs
  - on top of the main spec
    - Compatibility differs per browser
    - there amy be used no client running at the time (visibl UI) when used
  - -f we wanna notify the user we are gonna use :
    - WebPush, it is the only api that happenns in the setver side, , and it in any moment can wake up our javascript
    - Background Sync exposes to browser that we have pending pending sync operation, and we are gonna specify the browser that we are gonna update , if we do not use this when we will do thjis is when the user open ur app again, so if we use this it says let's try now
    - periodic Bakcground Sync - it may happpend that every morning, we may want the wake the app, and wanna download some thing even if use is not awake, in that case we will use this
    - Background fetch- what if the user wanna download like large data, and if we do this in our main thread it would block other thigs, so we use background fetch
    - Payment handler - there is an api that handles the payment wiht pament system, like anythign, so in thatr case this one what we are telling Payment handler is for authorization, that we may ge teh money after 5 min, so first we should authorze the user, then we can charge the money whenever we want
- servioce worker apis are avaible in all chromium brpwsers, but some non chromium browsers could disable them
- in Safari only web push is vavaialble
- in firefox also only Webpush

## Background Detection

- let's talk about PWA lifecycle

  - we are in open page
    - if we go another app, and put current holding to background we will have one event Visibility change
      - Visibility
    - An app will be suspended in andorid in 5 min, but in ios it is 3 secons, in the background it is goind to actually free the whole content
      - freeze
    - if the user goes to the app again , in that case , our code starst to execute again, and in this moment we will have resume and visibity change
      - resyme
      - visibility change
    - there might be a situation that our app might be discarded, like in an moment that takes lot's of memory, like recording a video, in that moment if the user goes to pwa browser see that it was discarded so it loads again, to check it that is discarded theer is a boolean in chrome that tells if it is discarded or not :
      - load
      - wasDiscarded
  - from our web app to another web app

    - deskop
      - all apps will be running in memory, so we wil trigger two actions
        - visibilitychange
        - blur
    - Mobile and some desktop sitations
      - only current one will be running in memory the rest are suspendded so, pwa goes to a suspended state , we will trigger two actions
        - visibilitychange
        - freeze(_chromium only_)
    - at any time app can be discarded, and it is done by the OS, ex, sometimes if we go the another tabb and come back later our app could be running, but sometimes it will restart , this is the case that is was disarded, there are two events are triggered at that moment:
      - load
      - document.wasDiscarded = true
        - wasDiscarded is true, that is state that persist in the whole load the same as how it started, for example if it starts with false it stays false , else if opposite.

  - Detection

  - Because there are many possibilities for
    background, there are many APIs and ways
    to detect getting in/out of "background".

  - only one is cross-paltform and cross possibility **Page Visibility API**

## Visibility change detection
