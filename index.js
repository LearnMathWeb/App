const { app, BrowserWindow } = require("electron");

app.on("ready", async () => {

    const url =  await fetch("https://learnmathweb.github.io/url/url.json", {
        method: "get"
    });

    const response = JSON.parse(await url.text());

    const window = new BrowserWindow({
        title: "LearnMath",
        height: 600,
        width: 1200,
        center: true,
        tabbingIdentifier: null,
        icon: "./assets/icon.png"
    });

    window.setMenu(null);
    window.loadURL(`https://${response.hostname}/dashboard.php`);

});

app.on("window-all-closed", () => {
    
    app.quit();

});