const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
    const window = new BrowserWindow({
        title: "LearnMath",
        height: 600,
        width: 1200,
        center: true,
        tabbingIdentifier: null,
        icon: "./assets/icon.png"
    });

    window.setMenu(null);
    window.loadURL("http://localhost:444/");

});

app.on("window-all-closed", () => {
    
    app.quit();

});