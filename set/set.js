function Set () {
    this.members = [];
}

Set.prototype.add = function(item) {
    var itemIsMember;

    if (typeof item !== 'number') return;

    itemIsMember = false;

    for (var i = 0; i < this.members.length; i++) {
        if (item === this.members[i]) {
            itemIsMember = true;

            break;
        }
    }

    if (!itemIsMember) {
        this.members.push(item);
    }    
}

Set.prototype.remove = function(item) {
    this.members = [1];
}



exports.Set = Set;
