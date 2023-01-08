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

function chgNormal(lang) {
  $('#gcCfooter').html('');
  if (lang=='zh'){$('#gcCfooter').load('load/index/footerNormalZH.txt');} else {$('#gcCfooter').load('load/index/footerNormal.txt');}
  $('#gcC_content').show(80);
  $('#nLantauSelect').hide(80);
  $('#airportSelect').hide(80);
}

function submitGreen(lang, des) {
  var currentdate = new Date(); 
  var date = currentdate.getDate() + "/" + (currentdate.getMonth()+1);
  var time = currentdate.getHours() + ":" + currentdate.getMinutes();
  var last3 = $('#last3').val();
  var lpn = $('#taxiLPN').val();
  var desloc = 'Unknown';
  switch (lang) {
    case 'en':
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
        case 16: desloc='Fu Tung Estate / Yu Tung Court';
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
        case 33: desloc='Discovery Bay';
          break;
      };
      break;
      
    case 'zh':
      switch(des){
        case 1: desloc='機場島';
          break;
        case 2: desloc='機場空運中心';
          break;
        case 3: desloc='亞洲空運中心';
          break;
        case 4: desloc='亞洲國際博覽館';
          break;
        case 5: desloc='國泰城';
          break;
        case 6: desloc='敦豪中亞樞紐中心';
          break;
        case 7: desloc='香港飛機工程有限工司';
          break;
        case 8: desloc='香港商用航空中心';
          break;
        case 9: desloc='香港天際萬豪酒店';
          break;
        case 10: desloc='富豪機場酒店';
          break;
        case 11: desloc='超級一號貨站';
          break;
        case 12: desloc='北大嶼山區';
          break;
        case 13: desloc='映灣園';
          break;
        case 14: desloc='東薈城名店倉';
          break;
        case 15: desloc='藍天海岸';
          break;
        case 16: desloc='富東邨/裕東苑';
          break;
        case 17: desloc='下嶺皮邨';
          break;
        case 18: desloc='影岸紅';
          break;
        case 19: desloc='水天藍岸';
          break;
        case 20: desloc='馬灣新邨';
          break;
        case 21: desloc='昂坪360纜車站（東涌）';
          break;
        case 22: desloc='北大嶼山醫院';
          break;
        case 23: desloc='諾富特東薈城酒店';
          break;
        case 24: desloc='海提灣畔';
          break;
        case 25: desloc='石門甲';
          break;
        case 26: desloc='上嶺皮邨';
          break;
        case 27: desloc='東提灣畔';
          break;
        case 28: desloc='東涌港鐵站';
          break;
        case 29: desloc='昇薈';
          break;
        case 30: desloc='黃家圍';
          break;
        case 31: desloc='逸東邨';
          break;
        case 32: desloc='港珠澳大橋';
          break;
        case 33: desloc='愉景灣';
          break;
        };
      break;
    }
  console.log('Date: ' + date + '\nLast 3 num: ' + $('#last3').val() + '\nTaxi LPN: ' + $('#taxiLPN').val() + '\nDestination: ' + desloc + '\nTime: ' + time);
  $('#gcrcd').html($('#gcrcd').html()+'<div onclick="delRc(this)">'+last3+'  |  '+date+'  |  '+time+'  |  '+lpn+ '  |  '+desloc+'<br><br></div>');
  localStorage.setItem('green', $('#gcrcd').html());
  chgNormal(lang);
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
  var cnt = $('#cntScreen').val()
  var currentdate = new Date();
  if (currentdate.getHours() != $('#nowTime').html()){
    $('#lastCNT').html(cnt);
    localStorage.setItem('lastCnt', cnt);
    localStorage.setItem('nowCNT', 0);
    $('#cntScreen').val('0');
  }
  $('#nowTime').html(currentdate.getHours());
  localStorage.setItem('timeNow', currentdate.getHours());
  $('#cntScreen').val(parseInt($('#cntScreen').val())+chg);
  localStorage.setItem('nowCNT', $('#cntScreen').val());
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
  $('#nowTime').html('');
  $('#lastCNT').html('0');
  localStorage.setItem('lastCnt', 0);
}