/*
How to run tests:

1) > npm install -g mocha

2) > mocha -u bdd -R spec test/
*/

/*
Problem: we want to create a hash map data type in Javascript.

Restrict keys to strings.

Allow any value.

Operations:
set, get, delete

Start with a simple hash function.

Test list:

HashMap._hash() returns a number between 0 and 9 from a string input
HashMap._hash() returns the same number for the same input
HashMap._hash() has a reasonable distribution

map.set() takes a key and value
map.set() adds items to an array of linked lists

map.get() retrieves a value associated with a key

map.delte() deletes a value

*/

var expect  = require('chai').should(),
    sinon   = require('sinon'),
    HashMap = require('./hashmap.js').HashMap;

describe('HashMap', function(){
    var hashmap;

    beforeEach(function(){
    });

    after(function(){
    });

    describe('._hash', function(){
        it('returns a number between 0 and 9', function(){
            var key,
                hash;

            for (var i = 0; i < 100; i++) {
                key = Math.random().toString(36).slice(2)

                hash = HashMap._hash(key);

                hash.should.be.a('number')
                hash.should.be.within(0, 9);
            }
        });
    });
});

