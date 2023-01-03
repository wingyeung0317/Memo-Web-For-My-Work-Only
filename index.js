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
  function writeGreen(last3, date, time, lpn, des) {
    const db = getDatabase();
    set(ref(db, 'greenCard'), {
      last3: last3,
      date: date,
      time: time,
      lpn: lpn,
      des: des
    });
  }
  console.log('Date: ' + date + '\nLast 3 num: ' + $('#last3').val() + '\nTaxi LPN: ' + $('#taxiLPN').val() + '\nDestination: ' + des + '\nTime: ' + time);
  chgNormal();
  $('#last3').val('')
  $('#taxiLPN').val('')
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

function uploadCnt(){
  var currentdate = new Date();
  if (currentdate.getMinutes() == 0) {
    var last_hr_cnt = $('#cntScreen').val();
    console.log(last_hr_cnt);
    $('#cntScreen').val('')
  }
}

function getDetail() {
  user_input = $('#pac-input').val();
  $('#detailInfo').html('');
  var resultNo = 0;
  $.getJSON('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,icon,formatted_address&input='+user_input+'&inputtype=textquery&language=zh-HK&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc', function(data){
    $.each(data, function(i,item){
      $.each(item, function(i,place){
        console.log(item);
        $('#detailInfo').append(`<li><img src="`+ place.icon +`">
          <span class="chiLocName">`+ place.name +`</span>
          <span class="engLocName"></span><br>
          <span class="chiStreetName">`+ place.formatted_address +`</span>
          <span class="engStreetName"></span></li>`);
        resultNo += 1;
      });
    });
  });
  getEngDetail();
}

function getEngDetail() {
  $.getJSON('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,formatted_address&input='+user_input+'&inputtype=textquery&language=en&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc', function(data){
    $.each(data, function(i,item){
      $.each(item, function(i,place){
        console.log(item);
        $('.engLocName')[i].append(place.name);
        $('.engStreetName')[i].append(place.formatted_address);
      });
    });
  });
}