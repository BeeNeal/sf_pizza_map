mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlbmVhbCIsImEiOiJjamRqdXdkd3UxMzB2MndvNmkwbGIzZmllIn0.xVy7VGtquOc7rUUpRz-KaQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/beeneal/cjhcu2nh91drp2sp4hexovxgt', // stylesheet location
    center: [-122.463, 37.7648], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

var geojson = {
  "features": [
    {
      "type": "Feature",
      "properties": {
        "address": "37 Yerba Buena Lane, San Francisco, California 94103, United States",
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
        "address": "4042 24th Street, San Francisco, California 94114, United States",
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
        "address": "680 2nd Street, San Francisco, California 94107, United States",
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
        "short_code": "CA-NT",
        "wikidata": "Q2007",
        "place_name": "Northwest Territories, Canada"
      },
      "geometry": {
        "coordinates": [
          -127.589407,
          69.613523
        ],
        "type": "Point"
      },
      "id": "region.3425"
    }
  ],
  "type": "FeatureCollection"
}

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});