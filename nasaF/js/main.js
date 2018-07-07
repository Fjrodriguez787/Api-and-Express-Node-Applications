// what can the user do?
// what does the user expect?
// What can the user see?

//Pull api for list of facilities to dom/console for nasa
//Facilities have to include location addresses
//Append list to dom/console


var apiUrl = "https://data.nasa.gov/resource/gvk9-iz74.json"
// + "?center="

// var output = "";

$.ajax({
  url: apiUrl,

   success: function(r){
    console.log(r)
    r.forEach(function(object){
      if(object.center +"," + object.city +","+ object.country !== $("body > ul > li:last-child").text()){
         $("ul").append("<li>"+ object.center +","+ object.city +","+ object.country + "</li>")
     }

    })
   },
  error: function(err){
    console.log(err)
}
})
