function Set () {
    this.members = [];
}

Set.prototype.add = function(item) {
    this.members.push(item);
}


exports.Set = Set;
