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
    case 12: desloc='Caribbean Coast';
    break;
  }
  // supabase.from('greencard').insert({ last3: last3, lpn: lpn, des: des });
  console.log('Date: ' + date + '\nLast 3 num: ' + $('#last3').val() + '\nTaxi LPN: ' + $('#taxiLPN').val() + '\nDestination: ' + desloc + '\nTime: ' + time);
  $('#gcrcd').html($('#gcrcd').html()+'<div onclick="delRc(this)">'+last3+'  |  '+date+'  |  '+time+'  |  '+lpn+ '  |  '+desloc+'</div>');
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

  var config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=name,icon,formatted_address&input='+user_input+'&inputtype=textquery&language=zh-HK&key=AIzaSyDUWWx5ghRSO8HOENqj1IRLGmv1HApkmfc',
    headers: { }
  };

  axios(config)
  .then(function (data) {
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
  })
  .catch(function (error) {
    console.log(error);
  });
  $.getScript("load/index/insertEng.js");
}

function clrStorage() {
  localStorage.removeItem('cntNow');
  localStorage.getItem('lastCnt');
}