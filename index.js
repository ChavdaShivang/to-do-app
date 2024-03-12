const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const Task = require('./models/task');


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get("/", function (req, res) {
	Task.find({}).then((tasksList)=>{
		return res.render("home", {
			title: "To-Do App",
			tasks: tasksList,
		});
	}).catch((err)=>{
		console.log("Error in getting tasks:", err);
		return;
	})
});

app.post("/create-task", function(req, res){
	Task.create({
		description: req.body.description,
		category: req.body.category,
		dueDate : req.body.dueDate,
		isCompleted: req.body.isCompleted,
	}).then((newTask)=>{
		console.log(newTask);
		return res.redirect("/");
	})
});



app.listen(port, function (err) {
	if (err) {
		console.log(`Error in running the server: ${err}`);
		return;
	}
	console.log(`Server is up and running on port: ${port}`);
});
