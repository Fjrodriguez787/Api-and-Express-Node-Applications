const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/coffee') {
    if('coffee' in params){
      if(params['coffee']== 'arusha'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var objToJson = {
          name: "Arusha",
          species: "C. arabica",
          region: "Tanzania, Paupa New Guinea"
        }
        res.end(JSON.stringify(objToJson));
      } else if (params['coffee']== 'bluemountain'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var objToJson = {
          name: "Blue Mountain",
          species: "C. arabica",
          region: "Blue Mountains region of Jamaica. Also grown in Kenya, Hawaii, Haiti, Papua New Guinea (where it is known as PNG Gold) and Cameroon (where it is known as Boyo)."
        }
        res.end(JSON.stringify(objToJson));
      } else if (params['coffee']== 'bourbon'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var objToJson = {
          name: "Bourbon",
          species: "C. arabica",
          region: "Reunion, Rwanda, Latin America"
        }
        res.end(JSON.stringify(objToJson));
      }
    }

  } else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else if (page == 'node-backend-simple-json/css/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
          });
        }else {
          figlet('404!!', function(err, data) {
            if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
              }
              res.write(data);
              res.end();
              });
          }
        });
server.listen(8000);
