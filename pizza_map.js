mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlbmVhbCIsImEiOiJjamRqdXdkd3UxMzB2MndvNmkwbGIzZmllIn0.xVy7VGtquOc7rUUpRz-KaQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/beeneal/cjhcu2nh91drp2sp4hexovxgt', // stylesheet location
    center: [-122.463, 37.7648], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Ajax call to local geojson
$(document).ready(function(e){
        $.ajax({url: "http://localhost:8000/pizza_pts.json", success: function(result){
            var geojson = result;
        }});
});



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