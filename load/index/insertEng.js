  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc&region=HK&language=en&libraries=places', function() {
    var request = {
      query: user_input,
      fields: ['name', 'formatted_address'],
    };
    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        $('.engLocName')[i].append(results[i].name);
        $('.engStreetName')[i].append(results[i].formatted_address);
        }
      }
    });
  });


// fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,formatted_address&input='+user_input+'&inputtype=textquery&language=en&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc')
//   .then((response) => response.json())
//   .then(function (data) {
//     $.each(data, function(i,item){
//       $.each(item, function(i,place){
//         console.log(item);
//         $('.engLocName')[i].append(place.name);
//         $('.engStreetName')[i].append(place.formatted_address);
//       });
//     });
//   });