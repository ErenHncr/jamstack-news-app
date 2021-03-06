const axios = require('axios');

exports.handler = async function(event, context, callback) {
  const { lat, lon } = event.queryStringParameneters;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });
}