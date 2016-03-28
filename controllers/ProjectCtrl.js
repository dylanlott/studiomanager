var Client = require('../models/Client.js'); 
var Project = require('../models/Project.js')

module.exports = {

	add: function(req, res){
		var newProject = new Project(req.body); 
		newProject.project_lead = req.user._id;
		newProject.save(function(err, newProject){
			if(err){
				return res.status(500).end(); 
			}else{
				return res.status(200).json(newProject).end(); 
			}
		}) 
	}

}