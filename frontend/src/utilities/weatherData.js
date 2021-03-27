// FIND BY ZIPCODE: https://api.openweathermap.org/data/2.5/weather?zip=18334,us&units=imperial&appid=adbbb0d12e7381d37f39d8a64bef9ade

let myData = {"coord":{"lon":-73.9067,"lat":40.8798},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":288.7,"feels_like":278.8,"temp_min":288.15,"temp_max":290.15,"pressure":1011,"humidity":41},"visibility":10000,"wind":{"speed":11.83,"deg":310,"gust":16.46},"clouds":{"all":20},"dt":1616809153,"sys":{"type":1,"id":4698,"country":"US","sunrise":1616755710,"sunset":1616800422},"timezone":-14400,"id":0,"name":"Bronx","cod":200}

myData ={"coord":{"lon":-73.4588,"lat":40.6682},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":286.7,"feels_like":279.76,"temp_min":284.82,"temp_max":289.15,"pressure":1012,"humidity":41},"visibility":10000,"wind":{"speed":7.2,"deg":300,"gust":13.38},"clouds":{"all":1},"dt":1616812978,"sys":{"type":1,"id":4135,"country":"US","sunrise":1616755608,"sunset":1616800310},"timezone":-14400,"id":0,"name":"Massapequa","cod":200}

// myData = {"coord":{"lon":-75.4482,"lat":41.0677},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":45.81,"feels_like":32.34,"temp_min":45,"temp_max":46.4,"pressure":1015,"humidity":66},"visibility":10000,"wind":{"speed":18.41,"deg":290,"gust":29.93},"clouds":{"all":20},"dt":1616813902,"sys":{"type":1,"id":4957,"country":"US","sunrise":1616756076,"sunset":1616800797},"timezone":-14400,"id":0,"name":"Long Pond","cod":200}

console.clear()

console.log(`Region: ${myData.name}`)
console.log('Weather (main):',myData.weather[0].main)
console.log('Weather (description):',myData.weather[0].description)
console.log(`Sunrise: ${myData.sys.sunrise} | Sunset: ${myData.sys.sunset}`)

console.log(`Temp: ${myData.main.temp} | Feels Like: ${myData.main.feels_like}`)
console.log(`Min: ${myData.main.temp_min} | Max: ${myData.main.temp_max}`)
console.log(`Humidity: ${myData.main.humidity}%`)
