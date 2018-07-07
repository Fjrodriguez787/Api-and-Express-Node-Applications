$('#search').on('click', function(){
  var enteredIngred = $('input').val()
  //console.log("click" + enteredIngred)
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+ enteredIngred
  let cocktailUrl ="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + enteredIngred
  //let spirit = {}

  $.ajax({

    url: apiUrl,
    success: function(res){
      //console.log(res);

      $('p').html(res.ingredients[0].strDescription);
      //for null value parameters
      if (res.ingredients = null){
        alert('Try again young Grasshopper')
      }
      testIngre(res.strIngredient)
      //res.strIngredient
    },
    error: function(err){
      console.log(err)
      alert('Try again young Grasshoppe')
    }
  })
  function testingred(){

  }
  function testIngre(strIngred) {
    $.ajax({
      url: cocktailUrl,
      success: function(result){
        // console.log("second" + spirit);
        result.drinks.forEach(function(object) {
          $("ul").append('<li>' + object.strDrink + '</li>')

        })
      },
      error: function(err){
        console.log(err)
        alert('Try again young Grasshoppe')
      }
    })
  }
})
