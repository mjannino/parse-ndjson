/*

 Permission to use, copy, modify, and/or distribute this software for any
 purpose with or without fee is hereby granted.

 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

 */



var fs = require('fs'),
    split2 = require('split2');



/**
 *
 * Starts an fs readStream on the specified filepath
 * function takes a filePath and a callback for async
 *
 * calls the callback(err, parsedLines) with the completed
 * array of JSON objects read from the newline-delimited
 * JSON file.
 *
 * calls callback with err if fs encounters any issues
 *
 * @param filePath
 * @param callback
 */


function parseNDJSON(filePath, callback){

    var parsedLines = [];


    fs.createReadStream(filePath)

        .pipe(split2())

        .on('data', function(line) {
            parsedLines.push(_parseJSON(line));
        })

        .on('end', function() {
            callback(null, parsedLines);
        })

        .on('error', function(err){
            callback(err);
        });
}




/**
 *
 * Rudimentary json parsing function, enclosed in try catch
 * Sync nature of json parsing and error throwing requires
 * this usage.
 *
 * json is a json object in plain text form to be parsed
 *
 * @param json
 * @returns {*}
 * @private
 */

function _parseJSON(json) {

    var parsedJSON = {};

    try {
        parsedJSON = JSON.parse(json);
    } catch (e) {
        return false;
    }

    return parsedJSON;
}

module.exports = parseNDJSON;