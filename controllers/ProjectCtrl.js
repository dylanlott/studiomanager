var Client = require('../models/Client.js'); 
var Project = require('../models/Project.js')

module.exports = {

	add: function(req, res){
		var newProject = new Project(req.body); 
		console.log("req user project ctrl", req.user); 
		newProject.project_lead = req.user._id;
		newProject.owner = req.user._id; 
		newProject.save(function(err, newProject){
			if(err){
				console.log("Error adding project", err); 
				return res.status(500).end(); 
			}else{
				return res.status(200).json(newProject).end(); 
			}
		}) 
	},

	list: function(req, res){
		Project
			.find({owner: req.body._id})
			.exec()
			.then(function(data, err){
				if(err){
					console.log("error getting projects", err); 
					return res.status(500).end(); 
				}else{
					res.status(200).json(data).end(); 
				}
			});
	}

}