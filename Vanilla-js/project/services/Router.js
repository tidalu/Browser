const Router = {
  init: () => {
    document.querySelectorAll('.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Link clicked');
        // const url1 = event.target.href;
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });
    // event handler listen
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });
    // chech the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`going to path: ${route}`);

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your order';
        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Details';
          const paramID = route.substring(route.lastIndexOf('-') + 1);
        }
    }

    // document.querySelector('main').children(0).remove();

    const cache = document.querySelector('main');
    cache.innerHTML = '';
    document.querySelector('main').appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
