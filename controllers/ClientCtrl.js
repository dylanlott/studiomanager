var Client = require('../models/Client.js'); 

module.exports = {

  add: function(req, res){
    var newClient = new Client(req.body);

    newClient.save(function(err, newClient){
      console.log("New client data ", newClient); 
      if(err){
        console.log("Error adding client: ",err); 
        return res.status(500).end(); 
      }else{
        res.status(200).json(newClient).end(); 
      }
    })
  }

}