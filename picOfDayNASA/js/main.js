$(document).on('change', function(){
  // Pull NASA weather request API
  var apiKey = "hGrtgrPOnkewygxR8Y2ZmzYVTvAbjHXlRTAlyHGJ";
  var date = $('#date').val();
  var apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + '&date=' + date;

  // User enters a date and a state to display the weather
  // https://api.nasa.gov/planetary/apod?api_key=hGrtgrPOnkewygxR8Y2ZmzYVTvAbjHXlRTAlyHGJ

  $.ajax({
    url: apiURL,
    success: function(res){
      $('img').addClass("hidden");
      $('iframe').addClass("hidden");
      console.log(typeof res.url);
      if (res.url.includes(".jpeg")  || res.url.includes(".png") || res.url.includes(".jpg") ){
        $('img').attr('src', res.url);
        $('img').removeClass();
      } else {
        $('iframe').attr('src', res.url);
        $('iframe').removeClass();
      }
    },
    error: function(r){
      // console.log(r);
      alert("Enter a valid date. Format: YYYY-MM-DD")
    }

  });

});
