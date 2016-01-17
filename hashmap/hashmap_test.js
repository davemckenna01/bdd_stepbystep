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

        it('returns reasonably distributed integers', function(){
            var low, med, high, distribution, numTrials;

            function trial() {
                var key,
                    hash,
                    distribution;

                distribution = [0,0,0,0,0,0,0,0,0,0];

                for (var i = 0; i < 1000; i++) {
                    key = Math.random().toString(36).slice(2);

                    hash = HashMap._hash(key);

                    distribution[hash]++;
                }

                distribution.sort(function sortNumber(a,b) {return a - b;});

                // returns something like:
                // [ 82, 87, 93, 97, 98, 100, 107, 107, 109, 120 ]
                return distribution;
            }

            low = med = high = 0;

            numTrials = 15;

            for (var i = 0; i < numTrials; i++) {
                distribution = trial();

                low += distribution[0];
                med += distribution[5];
                high += distribution[9];
            }

            low = low / numTrials;
            med = med / numTrials;
            high = high / numTrials;

            low.should.be.within(80, 90);
            med.should.be.within(95, 105);
            high.should.be.within(110, 120);
        });

        it('is deterministic', function(){
            var key,
                hash1,
                hash2;

            for (var i = 0; i < 5; i++) {
                key = Math.random().toString(36).slice(2);

                hash1 = HashMap._hash(key);
                hash2 = HashMap._hash(key);

                hash1.should.eq(hash2);
            }
        });
    });

    describe('set', function(){
        it('adds items as linked list node', function(){
            var hashmap,
                hash;

            hashmap = new HashMap();

            hashmap.set('foo', 'bar');

            hashmap._items.should.include({
                key: 'foo', value: 'bar', next: null
            });
        });

        it('adds items to array slot computed from key', function(){
            var hashmap,
                hash;

            hashmap = new HashMap();

            hashmap.set('foo', 'bar');

            hashmap._items[HashMap._hash('foo')]
                    .should.eql({key: 'foo', value: 'bar', next: null});
        });
    });
});

