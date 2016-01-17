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

exports.HashMap = HashMap;