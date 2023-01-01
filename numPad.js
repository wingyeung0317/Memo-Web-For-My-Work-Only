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
  var time = currentdate.format("hh:mm");
  console.log('Date: ' + date + '\nLast 3 num: ' + $('#last3').val() + '\nTaxi LPN: ' + $('#taxiLPN').val() + '\nDestination: ' + des + '\nTime: ' + time);
  chgNormal();
  $('#last3').val('')
  $('#taxiLPN').val('')
}