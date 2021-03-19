
var request = new XMLHttpRequest()
var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cf10aa90261638e49ec62344d097b5ce';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data.coord);
}










