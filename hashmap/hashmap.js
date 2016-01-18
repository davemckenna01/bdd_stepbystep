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

HashMap.prototype.get = function (key) {
    var index,
        current_node,
        value;

    index = HashMap._hash(key);

    current_node = this._items[index];

    while (current_node) {
        if (current_node.key === key) {
            value = current_node.value;

            break;
        }

        current_node = current_node.next;
    }

    return value;
}

exports.HashMap = HashMap;