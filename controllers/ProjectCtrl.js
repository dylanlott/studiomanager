var Client = require('../models/Client.js');
var Project = require('../models/Project.js')

module.exports = {

	add: function(req, res){
		if(Project.findOne({name: req.body.name})){
			res.json({"message":"Project with that name already exists."}).end();
		}

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
			.populate('project_lead engineers owner')
			.then(function(data, err){
				if(err){
					console.log("error getting projects", err);
					return res.status(500).end();
				}else{
					res.status(200).json(data).end();
				}
			});
	},

	listOne: function(req, res) {
		console.log("List one Project Activated");
		Project
			.findOne({ _id: req.params.id })
			.select('_id')
			.exec()
			.then(function(projects){
				return res.status(200).json(projects).end();
			})
			.catch(function(err){
				return res.status(404).json(err).end();
			})
	},

	update: function(req, res) {
		Project
			.findByIdAndUpdate(req.params.id, req.body)
			.exec()
			.then(function(project) {
				res.status(200).json(project).end();
			})
			.catch(function(err){
				return res.status(500).json(err).end();
			})
	},

	delete: function(req, res) {
		Project
			.findById(req.params.id)
			.remove()
			.then(function(project) {
				res.status(203).json(project).end();
			})
			.catch(function(err) {
				return res.status(500).json(err).end();
			})
	}

}
