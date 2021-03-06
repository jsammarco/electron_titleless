// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const remote = require('electron').remote;

function minimizeWin(){
	var window = remote.getCurrentWindow();
	window.minimize();  
}

function closeWin(){
	var window = remote.getCurrentWindow();
	window.close();
	app.quit();
}