function addLast3(num) {
  $('#last3').val($('#last3').val()+num);
}

function to_nLantau(){
  $('#gcC_content').hide(80);
  $('#nLantauSelect').show(80);
  chgReturn();
}

function to_Airport(){
  $('#gcC_content').hide(80);
  $('#airportSelect').show(80);
  chgReturn();
}

function chgReturn(){
  $('#gcCfooter').html('');
  $('#gcCfooter').load('load/index/footerReturn.txt');
}

function chgNormal() {
  $('#gcCfooter').html('');
  $('#gcCfooter').load('load/index/footerNormal.txt');
  $('#gcC_content').show(80);
  $('#nLantauSelect').hide(80);
  $('#airportSelect').hide(80);
}

function submitGreen(des) {
  var currentdate = new Date(); 
  var date = currentdate.getDate() + "/" + (currentdate.getMonth()+1);
  var time = currentdate.getHours() + ":" + currentdate.getMinutes();
  var last3 = $('#last3').val();
  var lpn = $('#taxiLPN').val();
  var desloc = 'Unknown';
  switch(des){
    case 1: desloc='Airport Island';
    break;
    case 2: desloc='Airport Freight Forwarding Ctr.';
    break;
    case 3: desloc='Asia Airfreight Terminal';
    break;
    case 4: desloc='AWE';
    break;
    case 5: desloc='Cathay Pacific City';
    break;
    case 6: desloc='DHL Central Asia Hub';
    break;
    case 7: desloc='Hong Kong Aircraft Engineering Co. Ltd';
    break;
    case 8: desloc='Hong Kong Business Aviation';
    break;
    case 9: desloc='Hong Kong SkyCity Marriott';
    break;
    case 10: desloc='Regal Airport Hotel';
    break;
    case 11: desloc='Super Terminal One';
    break;
    case 12: desloc='North Lantau Island Area';
    break;
    case 13: desloc='Caribbean Coast';
    break;
    case 14: desloc='Citygate Outlets';
    break;
    case 15: desloc='Coastal Skyline';
    break;
    case 16: desloc='Fu Tung Estate / Yu Tung Estate';
    break;
    case 17: desloc='Ha Ling Pei Village';
    break;
    case 18: desloc='La Rossa';
    break;
    case 19: desloc='Le Bleu Deux';
    break;
    case 20: desloc='Ma Wan Sun Tsuen';
    break;
    case 21: desloc='Ngong Ping 360 Cable Car Stn. (Tung Chung)';
    break;
    case 22: desloc='North Lantau Hospital';
    break;
    case 23: desloc='Novotel Citygate Hong Kong';
    break;
    case 24: desloc='Seaview Crescent';
    break;
    case 25: desloc='Shek Mun Kap';
    break;
    case 26: desloc='Sheung Ling Pei Village';
    break;
    case 27: desloc='Tung Chung Crescent';
    break;
    case 28: desloc='Tung Chung MTR Station';
    break;
    case 29: desloc='The Visionary';
    break;
    case 30: desloc='Wong Ka Wai';
    break;
    case 31: desloc='Yat Tung Estate';
    break;
    case 32: desloc='HZMB';
    break;
    
  }
  // supabase.from('greencard').insert({ last3: last3, lpn: lpn, des: des });
  console.log('Date: ' + date + '\nLast 3 num: ' + $('#last3').val() + '\nTaxi LPN: ' + $('#taxiLPN').val() + '\nDestination: ' + desloc + '\nTime: ' + time);
  $('#gcrcd').html($('#gcrcd').html()+'<div onclick="delRc(this)">'+last3+'  |  '+date+'  |  '+time+'  |  '+lpn+ '  |  '+desloc+'</div><br>');
  localStorage.setItem('green', $('#gcrcd').html());
  chgNormal();
  $('#last3').val('')
  $('#taxiLPN').val('')
}

function delRc(b) {
  b.remove();
  localStorage.setItem('green', $('#gcrcd').html());
}

function gcC(){
  $('#CnR').hide(60);
  $('#mapS').hide(60);
  $('body').css('background-color', '#0fd');
  $('#gcC').show(60);
}

function CnR(){
  $('#gcC').hide(60);
  $('#mapS').hide(60);
  $('body').css('background-color', '#40d');
  $('#CnR').show(60);
}

function mapS(){
  location.reload();
}

function cntChange(chg) {
  $('#cntScreen').val(parseInt($('#cntScreen').val())+chg);
  cntNow($('#cntScreen').val());
}

function cntNow(cnt) {
  var currentdate = new Date();
  if (currentdate.getHours() != $('#nowCNT').html()){
    uploadCnt();
  }
  $('#nowCNT').html(currentdate.getHours());
  localStorage.setItem('cntNow', currentdate.getHours());
}

function uploadCnt(){
  var cntp = $('#cntScreen').val()
  $('#lastCNT').html(cntp);
  localStorage.setItem('lastCnt', cntp);
  $('#cntScreen').val('0');
}

function getDetail() {
  user_input = $('#pac-input').val();
  $('#detailInfo').html('');
  var resultNo = 0;
  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc&region=HK&language=zh-HK&libraries=places', function() {
    var service = new google.maps.places.PlacesService(map);
    var request = {
      query: user_input,
      fields: ['name', 'icon', 'formatted_address'],
    };

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
          $('#detailInfo').append(`<li><img src="`+ results[i].icon +`">
            <span class="chiLocName">`+ results[i].name +`</span>
            <span class="engLocName"></span><br>
            <span class="chiStreetName">`+ results[i].formatted_address +`</span>
            <span class="engStreetName"></span></li>`);
          resultNo += 1;
        }
      }
    });
    $.getScript("load/index/insertEng.js");
  });
  

  // fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,icon,formatted_address&input='+user_input+'&inputtype=textquery&language=zh-HK&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc')
  //   .then((response) => response.json())
  //   .then(function (data) {
  //     $.each(data, function(i,item){
  //       $.each(item, function(i,place){
  //         console.log(item);
  //         $('#detailInfo').append(`<li><img src="`+ place.icon +`">
  //           <span class="chiLocName">`+ place.name +`</span>
  //           <span class="engLocName"></span><br>
  //           <span class="chiStreetName">`+ place.formatted_address +`</span>
  //           <span class="engStreetName"></span></li>`);
  //         resultNo += 1;
  //       });
  //     });
  //   });
  // $.getScript("load/index/insertEng.js");
}

function clrStorage() {
  localStorage.removeItem('cntNow');
  localStorage.getItem('lastCnt');
}