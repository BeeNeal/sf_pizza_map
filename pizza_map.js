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
        "address": "2175 Chestnut St San Francisco, CA 94123",
        "place_name": "Delarosa",
        "region": "Marina",
        "cross ": "Steiner St & Pierce St "
      },
      "geometry": {
        "coordinates": [
          -122.4391249,
          37.8003028
        ],
        "type": "Point"
      },
      "id": "address.1047900515756646"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "1570 Stockton St San Francisco, CA 94133",
        "place_name": "Tony’s Pizza Napoletana",
        "region": "North Beach"

      },
      "geometry": {
        "coordinates": [
        -122.4090551,
        37.8003171,
        ],
        "type": "Point"
      },
      "id": "region.3425"
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
    },
    {
      "type": "Feature",
      "properties": {
        "address": "151 Clement St San Francisco, CA 94118",
        "place_name": "Giorgio’s Pizzeria",
        "region": "Inner Richmond",
        "cross ": "3rd Ave, 2nd Ave"
      },
      "geometry": {
        "coordinates": [
        -122.4610496,
        37.7829868,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "42 Green St San Francisco, CA 94133",
        "place_name": "Golden Boy Pizza",
        "region": "North Beach",
        "cross ": "Jasper Pl & Bannam Pl"

      },
      "geometry": {
        "coordinates": [
        -122.4001102,
        37.8006407,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "300 Connecticut St, San Francisco, CA 94107",
        "place_name": "Goat Hill Pizza",
        "region": "Potrero Hill"

      },
      "geometry": {
        "coordinates": [
        -122.3977,
        37.7624,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
       "type": "Feature",
      "properties": {
        "address": "3299 Mission St San Francisco, CA 94110",
        "cross": "Valencia St & 29th St Bernal Heights",
        "place_name": "PizzaHacker",
        "region": "Bernal Heights"

      },
      "geometry": {
        "coordinates": [
        -122.4205456,
        37.7440626
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "509 Valencia St, San Francisco, CA 94110",
        "place_name": "Arinell Pizza",
        "region": "Mission"

      },
      "geometry": {
        "coordinates": [
        -122.4217,
        37.7647,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
          {
      "type": "Feature",
      "properties": {
        "address": "211 23rd Ave, San Francisco, CA 94121",
        "place_name": "Pizzetta 211",
        "region": "Outer Richmond"

      },
      "geometry": {
        "coordinates": [
        -122.482973,
        37.783682,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "",
        "place_name": "Pizzeria Delfina",
        "region": "Pac Heights",
        "cross ": "";

      },
      "geometry": {
        "coordinates": [
        -122.4610496,
        37.7829868,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
        {
      "type": "Feature",
      "properties": {
        "address": "",
        "place_name": "Little Star",
        "region": "Western Addition",
        "cross ": "";

      },
      "geometry": {
        "coordinates": [
        -122.4610496,
        37.7829868,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "",
        "place_name": "Slicehouse",
        "region": "Haight Ashbury",
        "cross ": "";

      },
      "geometry": {
        "coordinates": [
        -122.4610496,
        37.7829868,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },
    {
      "type": "Feature",
      "properties": {
        "address": "",
        "place_name": "The Slice",
        "region": "Castro/Upper Market",
        "cross ": "";

      },
      "geometry": {
        "coordinates": [
        -122.4610496,
        37.7829868,
        ],
        "type": "Point"
      },
      "id": "region.3425"
    },



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