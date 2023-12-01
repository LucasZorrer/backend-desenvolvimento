const { Chefia } = require("../models");

const listAll = async (req,res) => {
    const chefias = await Chefia.findAll()
    res.json({success:true, chefias})
};

const create = () =>{
   
}

module.exports = {
    listAll
}