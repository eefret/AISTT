'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

function windowClosed() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
}

app.on('ready', createWindow);
app.on('window-all-closed', windowClosed);
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});