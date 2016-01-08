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



exports.Set = Set;
