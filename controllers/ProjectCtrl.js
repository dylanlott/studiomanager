const Client = require('../models/Client');
const Project = require('../models/Project')
const User = require('../models/User');
module.exports = {

	add: function(req, res){

		const newProject = new Project(req.body);
		const user_id = req.user._id;
		newProject.project_lead = req.user._id;
		newProject.owner = user_id;

		newProject.save()
			.then((project, delta) => {

				console.log("Project: ", project);
				console.log("Delta: ", delta);

				User.update(
					{ _id: user_id },
					{$push: {projects: newProject}},
					function(data, delta) {
						console.log("Delta: ", delta)
						console.log("User updated to: ", data)
					}
				)

				res.status(201).json(newProject).end();

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
