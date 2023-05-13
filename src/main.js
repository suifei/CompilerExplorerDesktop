// A BrowserView can be used to embed additional web content into a BrowserWindow.
// It is like a child window, except that it is positioned relative to its owning
// window. It is meant to be an alternative to the webview tag.
//
// For more info, see:
// https://electronjs.org/docs/api/browser-view

// In the main process.
const { dialog, BrowserWindow, app } = require('electron')

app.whenReady().then(() => {
  let win = new BrowserWindow({ width: 1280, height: 800 })
  win.on('closed', () => {
    win = null
  })

  win.loadURL('https://godbolt.org/', {
    userAgent : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4.1 Safari/605.1.15"
  })

  const contents = win.webContents
  contents.on('did-finish-load', async () => {
    let js = `
    document.querySelector("#motd").remove();
    document.querySelector("#ces").remove();
    document.querySelector("#socialshare").remove();
    setTimeout(()=>document.querySelector("#alert > div > div > div.modal-footer > button").click(),1000);
    `;
    contents.executeJavaScript(js, true)
    .then((result) => {
      console.log(result) // Will be the JSON object from the fetch call
    })
    
  })

})

//#motd
//#ces 
//#socialshare
//body > div.modal-backdrop.fade.show 
//#alert
//#alert > div > div > div.modal-footer > button