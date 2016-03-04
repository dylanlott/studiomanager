var Gear = require('../models/Gear.js'); 

module.exports = {

  add: function(req, res){
    var newGear = new Gear(req.body);

    newGear.save(function(err, newGear){
      console.log("newGear saved ", newGear); 
      if(err){
        console.log(err); 
        return res.status(500).end(); 
      }else{
        res.status(200).send().end(); 
      }
    })
  }


}