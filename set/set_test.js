/*
How to run tests:

1) > npm install -g mocha

2) > mocha -u bdd -R spec test/
*/

/*
Problem: we want to create a set data type in Javascript.

Restrict membership to numbers.

Operations:
add, remove, check for membership

Test list:

set.add() adds a new member to the set
set.add() doesn't allow duplicates
set.add() only allows numbers

set.remove() removes a member from the set

set.isMember() checks whether value is a member

*/

var expect = require('chai').should(),
    sinon  = require('sinon'),
    Set    = require('./set.js').Set;

describe('Set', function(){
    beforeEach(function(){
    });

    after(function(){
    });

    describe('', function(){
        it('', function(){
        });
    });
});
