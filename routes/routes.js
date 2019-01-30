/* ******** ******** ******** ******** ******** ********  */
/* ******** ******** REST API HANDLERS ******** ********  */
/* ******** ******** ******** ******** ******** ********  */
exports.getData = function (req, res){
  var fs = require('fs');
  const path = require('path')
  let reqPath = path.join(__dirname, '../sample.json');
    fs.readFile(reqPath , 'utf8', function (err, data) {
       if(!err) {
          var jsonObj = JSON.parse(data)
          res.end( data );
        }else {
           res.end("Error: "+err )
        }
   });
};
