// Cache DOM elements
const form = document.getElementById('form');
const list = document.getElementById('list');

// Create the list
const items = [
  'Center the page title',
  'Change the background color to #333',
  'Edit the JavaScript so typing text and hitting enter adds the item to the list!',
];

function render() {
  list.innerHTML = null;
  // Append items to the list
  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
  });
}
form.addEventListener('keyup', (evt) => {
  if (evt.key === 'Enter') {
    const enteredValue = form.value.trim();

    if (!items.includes(enteredValue) && enteredValue.length > 0) {
      items.push(enteredValue);
      render();
    } else {
      alert('Value is already on the list!');
    }
    form.value = '';
    isDuplExist(items);
    render(); // Render after handling duplicates
  }

  function isDuplExist(arr) {
    let mp = {};
    for (let i of arr) {
      if (!mp.hasOwnProperty(i)) {
        mp[i] = 1;
      } else {
        mp[i]++;
      }
    }

    let arrObj = Object.entries(mp);
    for (let i of arrObj) {
      while (i[1] > 1) {
        let index = items.indexOf(i[0]);
        items.splice(index, 1);
        i[1]--;
      }
    }
  }
});

render(); // Assuming render is defined elsewhere in your code
