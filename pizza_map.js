mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlbmVhbCIsImEiOiJjamRqdXdkd3UxMzB2MndvNmkwbGIzZmllIn0.xVy7VGtquOc7rUUpRz-KaQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/beeneal/cjhcu2nh91drp2sp4hexovxgt', // stylesheet location
    center: [-122.463, 37.7648], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// add geocode search controls to the map.
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));

// Ajax call to local geojson
$(document).ready(function(e){
        $.getJSON({url: "http://localhost:8000/pizza_pts.json",
            success: function(data){
                console.log('this is working at least');
                var geojson = data;
                console.log(result);
        }});
});

var geojson = {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "address": "37 Yerba Buena Lane, San Francisco, California 94103",
        "place_name": "Delarosa"
      },
      "geometry": {
        "coordinates": [
          -122.40439,
          37.785396
        ],
        "type": "Point"
      },
      "id": "address.1047900515756646"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "4042 24th Street, San Francisco, California 94114",
        "place_name": "Paxti's Pizza"
      },
      "geometry": {
        "coordinates": [
          -122.43287,
          37.751612
        ],
        "type": "Point"
      },
      "id": "address.4490842138254994"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "680 2nd Street, San Francisco, California 94107",
        "place_name": "Slice House"
      },
      "geometry": {
        "coordinates": [
          -122.39123,
          37.780697
        ],
        "type": "Point"
      },
      "id": "address.6404482400250856"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "2240 Polk St, San Francisco, CA 94109",
        "place_name": "Gioia Pizza",
        "region": "Russian Hill"

      },
      "geometry": {
        "coordinates": [
        -122.4218,
        37.797497
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "1411 Polk St, San Francisco, CA 94109",
        "place_name": "Victor's Pizza",
        "region": "Nob Hill"

      },
      "geometry": {
        "coordinates": [
        -122.4208,
        37.7899
        ],
        "type": "Point"
      },
      "id": "region.3425"
    }
  ],
  "type": "FeatureCollection"
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var pizzaMarker = document.createElement('div');
  pizzaMarker.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(pizzaMarker)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
  .setHTML('<h3>' + marker.properties.place_name + '</h3><p>' + marker.properties.address + '</p>'))
  .addTo(map);
});