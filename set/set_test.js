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
    var set;

    beforeEach(function(){
        set = new Set();
    });

    after(function(){
    });

    describe('add', function(){
        it('adds a new member to the set', function(){
            set.add(1);

            set.members.should.eql([1]);
        });

        it('adds to a list of members', function(){
            set.add(1);
            set.add(2);

            set.members.should.eql([1, 2]);
        });

        it('doesnt allow duplicates', function(){
            set.add(1);
            set.add(1);

            set.members.should.eql([1]);
        });

        it('only allows numbers', function(){
            set.add('one');

            set.members.should.be.empty;
        });
    });

    describe('remove', function(){
        it('removes a member from the set', function(){
            set.add(1);
            set.add(2);
            set.remove(2);

            set.members.should.eql([1]);
        });
    });
});

