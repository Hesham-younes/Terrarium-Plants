const plants = require('../data/data.json');


exports.getPlants = async (req,res) => {
    res.status(200)
    .setHeader("Content-Type","application/json") 
    .json(plants)
}

