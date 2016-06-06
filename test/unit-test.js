var parseNDJSON = require('../index');
var assert = require('assert');
var sinon = require('sinon');

var mockNDJSON = "./test/mock.txt";
var badName = "badname.txt";
var callback = {
        caller: function(err, array){
            assert(callback.caller.called);
        },
        errorCaller: function(err, array){
            assert.equal(typeof(err), typeof(TypeError));
        }
    };

sinon.spy(callback, 'caller');


describe("parseNDJSON", function(){
    
    it("Should call callback", function(){
        parseNDJSON(mockNDJSON, callback.caller);
    });

    it("Should throw a TypeError given an invalid path name", function(){
        parseNDJSON(badName, callback.errorCaller);
    });
    
});
