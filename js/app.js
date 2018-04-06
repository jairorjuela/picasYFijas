$(document).ready(function(){
  $('table').addClass('hide')
// validacion de caracteres
  $('textarea').on('keypress', function(event){
    key = event.keyCode;
    if(key === 13){
      console.log("enter");
      var number = /^[0-9]{1,4}$/;
      // if(($('textarea').value.match(number)){
      //   var cont = $(this).val().length;
      //   if(cont <= 3){
      //     $('span').css("color","red");
      //   }
      // });
    };
  });
});
