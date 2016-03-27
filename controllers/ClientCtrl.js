var Client = require('../models/Client.js'); 

module.exports = {

  add: function(req, res){
    console.log("add client req.body ", req.body); 
    console.log("add client req.user ", req.user); 
    var newClient = new Client(req.body);
    newClient.owner = req.user._id;
    newClient.save(function(err, newClient){
      console.log("New client data ", newClient); 
      if(err){
        console.log("Error adding client: ",err); 
        return res.status(500).end(); 
      }else{
        res.status(200).json(newClient).end(); 
      }
    })
  },

  list: function(req, res){
    console.log("List Clients Req user", req.user); 
    Client
      .find({owner: req.user._id})
      .exec()
      .then(function(clients, err){
        if(err){
          console.log("Error getting clients: ", err); 
        }
        return res.status(200).json(clients).end(); 
      })
  },

  getOne: function(req, res){
    console.log("Get one client ctrl hit"); 
    console.log("client id ", req.params.id); 
    Client
      .findById(req.params.id)
      .then(function(client, err){
        if(err){
          console.log("Error getting client", err); 
          return res.status(500).end(); 
        }
        return res.status(200).json(client).end(); 
      })
  },

  delete: function(req, res){
    console.log("Remove client: ", req.params.id); 
    Client
      .findByIdAndRemove(req.params.id)
      .then(function(client, err){
        if(err){
          console.log("Error deleting client: ", err); 
          return res.status(500).end(); 
        }else{
          return res.status(200).json(client).end(); 
        }
      })
  }
}