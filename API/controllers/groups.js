var Group = require('../models/groups');

module.exports.find = () => {
    console.log('MONGO: find()');
    return Group
        .find()
        .exec()
}

module.exports.findOne = id => {
    console.log('MONGO: findOne(' + id + ')');
    return Group
        .findOne({_id: id})
        .exec()
}

module.exports.findByName = name => {
    console.log('MONGO: findName(' + name + ')');
    return Group
        .find({name: {$regex: '.*' + name + '.*'}})
        .exec()
}

module.exports.insert = g => {
    console.log('MONGO: insert(' + g + ')');
    console.log(g);
    var newGroup = new Group(g);
    return newGroup.save()
}

module.exports.remove = id => {
    console.log('MONGO: remove(' + id + ')');
    return Group
        .deleteOne({_id: id})
        .exec()
}