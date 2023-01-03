fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,formatted_address&input='+user_input+'&inputtype=textquery&language=en&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc')
  .then((response) => response.json())
  .then(function (data) {
    $.each(data, function(i,item){
      $.each(item, function(i,place){
        console.log(item);
        $('.engLocName')[i].append(place.name);
        $('.engStreetName')[i].append(place.formatted_address);
      });
    });
  });
.catch(function (error) {
  console.log(error);
});