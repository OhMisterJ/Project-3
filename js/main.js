//"memory" will be the previous number submitted into the calculator. "flag" will contain a value until the condition is true, which would then be changed. It will be false (0 or empty) until a value or expression is inputted, which would then be returned true.
var memory = 0;
var memorycalc;
var a = false;
var flag = false;
var screen = function(x) {
  if(x == '.' && flag == true){
    return;
//Numbers will be displayed on "#screen". Adding "#screen" to the lines will help the numbers locate where each result will be displayed.
  }
  if(a == true){
    $('#screen').val('');
    a = false;
  }
//a and b will be both numbers that get inputted for the equation.
  var b = $('#screen').val() + x;
  if(x == '.'){
    flag = true;
  } else {
    b = b * 1;
  }

  $('#screen').val(b);
}

var calculate = function(x) {
  if(memory){
    result(); 
  }
  flag = false;
  a = true; 
  memory = $('#screen').val();
  memorycalc = x;
}

$('#clear').click(function (){
  memory = 0;
  $('#screen').val("0");
});
$('#sign').click(function (){
  $('#screen').val($('#screen').val() * -1);
});
$('#backspace').click(function (){
  var len = $('#screen').val().length;
  $('#screen').val($('#screen').val().substring(0, len -1));
  if($('#screen').val().length == 0)
    $('#screen').val(0);
});
//parseFloat to ensure no concatenations.
var result = function(){
  if(memory == 0)
  return;
  a = true;
  var b;
  switch(memorycalc){ 
    case '+': b = parseFloat(memory) + parseFloat($('#screen').val());
     break; 
    case '-': b = parseFloat(memory) - parseFloat($('#screen').val()); 
      break; 
    case '*': b = parseFloat(memory) * parseFloat($('#screen').val()); 
      break; 
    case '/': b = parseFloat(memory) / parseFloat($('#screen').val()); 
      break; 
  } 

  screen(b);
  a = true;
  flag = false;
  memory = 0;
};

$('.digit').click(function(e) {
  screen(e.target.value);
});
$('#divide, #multiply, #minus, #plus').click(function(e) {
  calculate(e.target.value);
});
$('#equal').click(function() {
  result();
});