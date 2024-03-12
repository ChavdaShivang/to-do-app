const express = require("express");
const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get("/", function (req, res) {
	let tasksList;
	return res.render("home", {
		title: "To-Do App",
		// tasks: tasksList,
	});
});

app.listen(port, function (err) {
	if (err) {
		console.log(`Error in running the server: ${err}`);
		return;
	}
	console.log(`Server is up and running on port: ${port}`);
});
