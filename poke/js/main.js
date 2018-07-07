$("#button").on("click", function(){

  var pokeName = $("#search").val();
  var apiURL = "https://api.pokemontcg.io/v1/cards?name=" + pokeName;
  var apiURL2 = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";


  if ($("#search").val() !== ""){

    $.ajax({
      url: apiURL,
      // Work with the response

      success: function(response) {
        // console.log( response ); // server response
        if (response.cards.length==0){
          $(".error").html("No Pokemon With That Name")
          $("#pokeImgs").hide();
          $('h3').hide();
          $('h2').hide();
        }else{
        $("#pokeImgs").attr('src',response.cards[0].imageUrl)
        $('h3').html(response.cards[0].hp)
        $('h2').html(response.cards[0].name)
        $('span').html(response.cards[0].types)
        $(".error").html("")
        console.log(response)
      }

      },
      error: function(r){
        console.log(r)
      }
    });
  }else{
    $(".error").html("Please enter a pokemon name to start!")

  }
  // $.ajax({
  //   url: apiURL2,
  //   success: function(response){
  //     $('.setup').html(response.setup)
  //     $('.punchline').html(response.punchline)
  //
  //   },
  //   error: function(err){
  //     console.log(err)
  //   }
  // })


});
