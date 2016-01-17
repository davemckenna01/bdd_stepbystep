function HashMap() {
    this._items = [];
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

HashMap.prototype.set = function (key, value) {
    var index,
        current_node;

    index = HashMap._hash(key);

    if (this._items[index]) {
        current_node = this._items[index];

        while (current_node.next) {
            current_node = current_node.next;
        }

        current_node.next = {
            key: key, value: value, next: null
        };
    } else {
        this._items[index] = {
            key: key, value: value, next: null
        };
    }
}

exports.HashMap = HashMap;