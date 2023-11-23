const express = require('express');
const fs = require('fs');

const app = express();

const cwd = __dirname

app.get('/', (req, res) => {
	var target_file = cwd+'/svg.svg'
	res.sendFile(target_file)
})

  port = 5000;

app.listen(port);