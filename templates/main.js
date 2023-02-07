var map = L.map('map').setView([22.735656852286496, 79.89257812508001], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var pointMarker = L.marker([23.0225,72.5714]).addTo(map);
pointMarker.bindPopup("<h1> Ahmedabad</h><p><h>Event Name :</h> Hackathon</p><p><h>Event Start-Time :</h> 2023-08-16 10AM </p><p><h>Event End-Time :</h> 2023-08-20 10AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");

var pointMarker = L.marker([11.0168, 76.9558]).addTo(map);
pointMarker.bindPopup("<h1> Kochi</h><p><h>Event Name :</h> Unknown Langugage</p><p><h>Event Start-Time :</h> 2023-04-03 10AM </p><p><h>Event End-Time :</h> 2023-04-03 11 AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");


var pointMarker = L.marker([13.0827, 80.2707]).addTo(map);
pointMarker.bindPopup("<h1>Chennai</h><p><h>Event Name :</h> Tech Quiz</p><p><h>Event Start-Time :</h> 2023-01-20 3PM </p><p><h>Event End-Time :</h> 2023-01-20 5PM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");



var pointMarker = L.marker([9.9312, 76.2673]).addTo(map);
pointMarker.bindPopup("<h1> Kochi</h><p><h>Event Name :</h> CTF</p><p><h>Event Start-Time :</h> 2023-03-30 12AM </p><p><h>Event End-Time :</h> 2023-03-31 12AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");

var pointMarker = L.marker([20.9320, 77.7523]).addTo(map);
pointMarker.bindPopup("<h1> Amravati</h><p><h>Event Name :</h> Paper Presentation</p><p><h>Event Start-Time :</h> 2023-05-04 12AM </p><p><h>Event End-Time :</h> 2023-05-06 12AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");

var pointMarker = L.marker([12.2958, 76.6394]).addTo(map);
pointMarker.bindPopup("<h1> Mysuru</h><p><h>Event Name :</h> Tech Masters Innovation</p><p><h>Event Start-Time :</h> 2023-06-06 12AM </p><p><h>Event End-Time :</h> 2023-06-10 12AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");

var pointMarker = L.marker([12.9716, 77.5946]).addTo(map);
pointMarker.bindPopup("<h1>Bengaluru</h><p><h>Event Name :</h>International Conference</p><p><h>Event Start-Time :</h> 2023-03-20 12PM </p><p><h>Event End-Time :</h> 2023-03-30 12AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");

var pointMarker = L.marker([28.7041, 77.1025]).addTo(map);
pointMarker.bindPopup("<h1>Delhi</h><p><h>Event Name :</h>Innovation Summit 2023</p><p><h>Event Start-Time :</h> 2023-03-20 12PM </p><p><h>Event End-Time :</h> 2023-03-30 12AM </p><p><h>Capacity :</h> 50 </p><p><a href='EventReg.html'>Register</a></p>");



function fest(){
const ul = document.querySelector('.list');
FestList.forEach((lacation) => {
const li = document.createElement('li');
const div = document.createElement('div');
const a = document.createElement('a');
const p = document.createElement('p');

div.classList.add('fest-item');
a.innerText = lacation.properties.name;
a.href='#';
p.innerText = lacation.properties.address;

div.appendChild(a);
div.appendChild(p);
li.appendChild(div);
ul.appendChild(li);
});
}

fest();
 
