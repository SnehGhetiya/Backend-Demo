const express = require("express");
const fs = require("fs");

const FOLDER_PATH = "./common";

const files = fs.readdirSync(FOLDER_PATH);

console.log(files);

const app = express();

for (let file of files) {
	let name = file.split(".")[0];
	app.use(`/${name}`, require(`${FOLDER_PATH}/${file}`));
}

app.listen(3000, (req, res) => {
	console.log("Server is running on 3000");
});
