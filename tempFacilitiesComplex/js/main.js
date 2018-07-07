

  var apiURL = "https://data.nasa.gov/resource/9g7e-7hzz.json";

  $.ajax({
    url: apiURL,

    success: function(response) {
      response.forEach(function(i){
        getWeather(i.facility,i.city,i.state)
      })
    },

    error: function(error){
      console.log(error)
    }
  });

  function getWeather(facility,city,state){
    var location = city + ', US'
    var apiKey = "bdbda512f84f6fd71e88a7d3aaa20f98"
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID="+apiKey+"&units=imperial";

    $.ajax({
      url: apiURL,

      success: function(response) {

        console.log(response)

        $('ol').append('<li>'+facility,city+(", ")+state+(" ")+ '<span class="color">' + response.main.temp + '</span>' +'</li>')
      },
      error: function(error){
        $('ol').append('<li>'+facility,city+(", ")+state+(" ")+'</li>')

      }
    });
  };
// Mobile Responsiveness
