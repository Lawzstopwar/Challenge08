let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator-himidity>.value');
let wind = document.querySelector('weather_indicator-wind>.value');
let pressure = document.querySelector('.weather_indicator-pressure>.value');
let temperature = document.querySelector('.weather_temperature>.value');
let image = document.querySelector('.weather_image');
let forecastBlock = document.querySelector('.weather_forecast');
let weatherAPIKey = '0e1d4f15c175dd06881d40b79606df7b';
let weatherBaseEndpoint = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=0e1d4f15c175dd06881d40b79606df7b'
let forecastBaseEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&Lon=-0.1257&appid=0e1d4f15c175dd06881d40b79606df7b'