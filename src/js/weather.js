function success(pos) {

  const url = `/.neflify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;
  
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      document.querySelector('#weather').classList.remove('hidden');

      document.querySelector('.city').textContent = data.name;
      document.querySelector('.temp').textContent = data.main.temp + ' °C';
      document.querySelector('.main').textContent = data.weather[0].main;
      document.querySelector('.desc').textContent = data.weather[0].description;
      
      console.log('data:', data);
    })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}