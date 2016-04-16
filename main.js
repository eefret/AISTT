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