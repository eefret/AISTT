'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


var mainWindow = null;

app.on('window-all-closed', function(){
    if (process.platform != 'darwin'){
        app.quit();
    }
});

app.on('ready', function(){
   mainWindow = new BrowserWindow({width: 800, height: 600,
       'min-height': 600, 'min-width': 800});
   mainWindow.loadURL('file://'+ __dirname + '/angular/index.html');

    var webContents = mainWindow.webContents;
    webContents.openDevTools();

    mainWindow.on('closed', function(){
       mainWindow = null;
    });
});