  var map;
  var directionsDisplay;
  var directionsService;
function initMap(){
  var google = window.google;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay.setMap(map);

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8,
    disableDefaultUI: true
  });

changeLocation("London, UK", "Luton, UK");// var onChangeHandler = function() {
//   calculateAndDisplayRoute(directionsService, directionsDisplay);
// };
// document.getElementById('start').addEventListener('change', onChangeHandler);
// document.getElementById('end').addEventListener('change', onChangeHandler);

}

function calculateAndDisplayRoute(ori, dest) {
  directionsDisplay.setMap(map);
  directionsService.route({

    origin: ori,
    destination: dest,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {

      directionsDisplay.setDirections(response);
      console.log(response.routes[0]);
      var routeX = response.routes[0];
      var pins = decode(routeX.overview_polyline);
      console.log(pins);
      window.google.maps.event.trigger(directionsDisplay.getMap(), "resize");

      console.log(response);

      console.log("LOGGED NEW AREA");
    } else {
      console.log("flopped");
      window.alert('Directions request failed due to ' + status);
    }
  });

}

function changeLocation(origin, destination){

  calculateAndDisplayRoute(origin, destination);
}

function decode(encoded){

    // array that holds the points

    var points=[ ]
    var index = 0, len = encoded.length;
    var lat = 0, lng = 0;
    while (index < len) {
        var b, shift = 0, result = 0;
        do {

    b = encoded.charAt(index++).charCodeAt(0) - 63;//finds ascii                                                                                    //and substract it by 63
              result |= (b & 0x1f) << shift;
              shift += 5;
             } while (b >= 0x20);


       var dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
       lat += dlat;
      shift = 0;
      result = 0;
     do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
       shift += 5;
         } while (b >= 0x20);
     var dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
     lng += dlng;

   points.push({latitude:( lat / 1E5),longitude:( lng / 1E5)})

  }
  return points
    }
