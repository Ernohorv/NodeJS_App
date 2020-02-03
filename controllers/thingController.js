const Thing = require('../model/Things');

exports.find = async (name) => {
     const us = await Thing.findOne({name: name}).exec()
    
        if(us) {
            return us.name;
        }
}

exports.deleteAll = async() => {
    await Thing.collection.deleteMany({});
}

exports.createThing = async(id, name, text, number) => {
    const newThing = new Thing({
        id: id,
        name: name,
        text: text,
        number: number
    });
    console.log(newThing)
    newThing.save();
}

exports.getAll = async() => {
    const allUser = await Thing.find({}).exec();
    return allUser;
}