const URL = "https://wttr.in"
const docSearch = document.querySelector("#searchForm")
docSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.querySelector("#place");
    const place = location.value;
    getWeather(place);
})

function getWeather(place) {
  fetch(`${URL}/${place}?format=j1`)
  .then((response) => response.json())
  .then((json) => {
  console.log(json);
  })
}