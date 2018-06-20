let mongoose = require('mongoose');

let TaleSchema = mongoose.Schema({
    title: String,
    content: String,
    categorieIds: [],
    createDate: {type: Date, default: new Date()}
});

module.exports = mongoose.model('tales', TaleSchema);

module.exports.addNew = function (data, cb) {
    let Tale = this;
    let newTale = new Tale();

    let categorieIds = [];

    categorieIds = categorieIds.concat(data.categories);

    newTale.title = data.title;
    newTale.content = data.tale;
    newTale.categorieIds = categorieIds;

    newTale.save(cb);
};

module.exports.updateTale = function(data, cb){
    let Tale = this;

    let categorieIds = [];

    categorieIds = categorieIds.concat(data.categories);

    Tale.findByIdAndUpdate(data.id,{
        title: data.title,
        content: data.tale,
        categorieIds: categorieIds
    },cb);
};

module.exports.getAll = function (cb) {
    let Tale = this;
    Tale.find(cb);
};

module.exports.getById = function (id, cb) {
    let Tale = this;
    Tale.findById(id,cb);
};

module.exports.getByCategory = function(id,cb){
    let Tale = this;
    Tale.find({categorieIds: id},cb);
}

module.exports.remove = function (id, cb) {
    let Tale = this;
    Tale.findByIdAndRemove(id,cb);
};