const electron  = require('electron');
const path      = require('path');
const url       = require('url');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, 'sample.db'));

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

app.on('ready', function(){


// Create the login window
mainWindow = new BrowserWindow({
  resizable: true,
  fullscreen: false
});

// Load html in window
mainWindow.loadURL(url.format({
  pathname: path.join(__dirname, 'login.html'),
  protocol: 'file:',
  slashes: true
}));
});
