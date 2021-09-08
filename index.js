const apiKey = "KEY";
const inputVal = input.value;
 
...
 
const url = http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={a81f529117a600af2ce3ea2c204c326b}
    const { main, name, weather } = data;
const icon = <img src="" alt="" class="">
  weather[0]["icon"]
;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // data used to retrieve response
  })
  .catch(() => {
    msg.textContent = "Search for a City";
  });
 
const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city title">
    <span>$city title}</span>
    </h2>
  <div class="temperature">${Math.round(main.temp)}<sup>°F</sup>
  </div>
  <figure>
    <img class="weather icon" alt=${weather dashboard}>
    <figcaption>$"weather dashboard"]}</figcaption>
  </figure>
`;
li.innerHTML = markup;
list.appendChild(li);