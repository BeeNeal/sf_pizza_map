mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlbmVhbCIsImEiOiJjamRqdXdkd3UxMzB2MndvNmkwbGIzZmllIn0.xVy7VGtquOc7rUUpRz-KaQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/beeneal/cjhcu2nh91drp2sp4hexovxgt', // stylesheet location
    center: [-122.463, 37.7648], // starting position [lng, lat]
    zoom: 12 // starting zoom
});