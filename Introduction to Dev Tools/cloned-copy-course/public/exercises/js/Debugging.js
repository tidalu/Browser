const list = document.getElementById('catfacts');

try {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      result.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        list.appendChild(li);
      });
    });
} catch (e) {
  // Silence is golden
}
