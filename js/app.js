//generacion de numero para jugar
  function shuffle(array) {
    for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x =   array[--i], array[i] = array[j], array[j] = x);
    return array;
  };

  var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var random = shuffle(myArray).slice(0, 4);

  console.log(random.join(""));

// juego
  $('#number').on('keypress', function (e) {

    if(e.which === 13){
      var input = $(this).val();

//validaciones
      if(input.length <=3 || input.length >4){
        $('#num').addClass('dif');
      }else{
        $('#num').removeClass('dif');

        var numberplayer = Array.from(input);

        for(var i = 0; i < numberplayer.length; i++){
          switch (true){

            case (numberplayer[0] === numberplayer[1]):
            case (numberplayer[0] === numberplayer[2]):
            case (numberplayer[0] === numberplayer[3]):
            case (numberplayer[1] === numberplayer[2]):
            case (numberplayer[1] === numberplayer[3]):
            case (numberplayer[2] === numberplayer[3]):
              $('#dif').addClass('dif');
              break;
            default:
            $('#dif').removeClass('dif');
            var jairo = numberplayer
            console.log("jairo default  " + jairo);
            break;
          }
        }

//conteo de picas y fijas
        var x = 0;
        var y = 0;

        if(jairo != null){

          var newJairo = jairo.map(Number);


          if(newJairo[0] === random[0]){
            x += 1;
          }if((newJairo[0] === random[1]) || (newJairo[0] === random[2]) || (newJairo[0] === random[3])){
            y += 1;
          }if(newJairo[1] === random[1]){
            x += 1;
          }if((newJairo[1] === random[0]) || (newJairo[1] === random[2]) || (newJairo[1] === random[3])){
            y += 1;
          }if(newJairo[2] === random[2]){
            x += 1;
          }if((newJairo[2] === random[0]) || (newJairo[2] === random[1]) || (newJairo[2] === random[3])){
            y += 1;
          }if(newJairo[3] === random[3]){
            x += 1;
          }if((newJairo[3] === random[0]) || (newJairo[3] === random[1]) || (newJairo[3] === random[2])){
            y += 1;
          }
//llenado de tabla
          var numer = newJairo.join("")

          $('tbody').append('<tr>' + '<td>' + numer + '</td>' + '<td>' + y + '</td>' + '<td>' + x + '</td>' + '</tr>');


                    if(x === 4){
                      console.log("ganaste");

                      document.getElementById("myOverlay").style.display = "block";


                                 // Close the full screen search box
                                 $('.closebtn').on('click', function(){

                                   document.getElementById("myOverlay").style.display = "none";

                                 });




                    };










}



















      }



      e.preventDefault();
    }


  });
