function HashMap() {

}

HashMap._hash = function (key) {
    var value,
        hash;

    value = 0;

    for (var i = 0; i < key.length; i++) {
        value += key[i].charCodeAt();
    }

    hash = value.toString().slice(-1);

    return parseInt(hash);
}

HashMap.prototype.set = function (key) {
    this._items = [];
    this._items[HashMap._hash(key)] = {
        key: 'foo', value: 'bar', next: null
    };
}

exports.HashMap = HashMap;