# parse-ndjson

This is a small, lightweight module utilizing fs.createReadStream and split2 to read in a newline-delimited JSON file, parse each line, and populate a Javascript array with JSON objects.

##Usage

'parse-ndjson' can be installed via npm: 'npm install --save parse-ndjson'

Example usage:

'''var parseNDJSON = require('parse-ndjson');
var pathToFile = "./path/to/file.txt";

parseNDJSON(pathToFile, function(err, parsedLines){

  if(!err){
    //process parsedLines, an array of parsed NDJSON objects
  }else{
    //handle err
  }
  
});
'''

Using 'parseNDJSON(pathToFile, callback);' provides async capability in line with fs.createReadStream, and 'callback(err, parsedLines);' provides a method to handling errors in the path or readStream and allows user-defined interaction with an array of JSON objects parsed from the file.



