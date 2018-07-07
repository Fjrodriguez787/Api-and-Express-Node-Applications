$('#getText').on('click', getText);

function getText(){
  return fetch('https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$top=50')
  .then((res) => res.json())
  .then((data) =>
  {
    // console.log(data.DisasterDeclarationsSummaries[0].incidentType)
    // console.log(data.DisasterDeclarationsSummaries[0].incidentBeginDate)
    // console.log(data.DisasterDeclarationsSummaries[0].incidentBeginDate)
    let output = '<h2>Incidents</h2>';
    data.DisasterDeclarationsSummaries.forEach(function(get){

      output +=
      `
      <div>
        <h2>incidentType: ${get.incidentType}</h2>
        <p>incidentTitle: ${get.title}</p>
        <p>incidentBeginDate: ${get.incidentBeginDate}</p>
        <p>incidentEndDate: ${get.incidentBeginDate}</p>
        <p>state: ${get.state}</p>
      </div>
      `;
    });
    $('#output').html(output)
  })
  function getDirector(dm){
    console.console.log(dm);
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ dm +"&format=json&callback=?";

    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data){
          $('#info').html(data[2],["0"]);
          $('#info').html(data[2],["0"]);
      
        },
        error: function (errorMessage) {
        }
    });
  }
}
