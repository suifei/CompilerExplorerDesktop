// Copyright (c) 2012, Compiler Explorer Desktop
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// - When Electron is ready
// - Create a browser window
// - When the window closes, set win to null
// - Load godbolt.org in the window
// - Get the web contents
// - When the page has finished loading
// - Execute some JavaScript to remove elements from the page
// - Click the button in the modal in 1 second
// - Execute the JavaScript
// - Print the result

// In the main process. 
const { BrowserWindow, app } = require('electron')

// When Electron is ready  
app.whenReady().then(() => {

  // Create a browser window
  let win = new BrowserWindow({ width: 1280, height: 800 })

  // When the window closes, set win to null
  win.on('closed', () => {
    win = null
  })

  // Load godbolt.org in the window 
  win.loadURL('https://godbolt.org/', {
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4.1 Safari/605.1.15"
  })

  // Get the web contents
  const contents = win.webContents

  // When the page has finished loading  
  contents.on('did-finish-load', async () => {

    // Execute some JavaScript to remove elements from the page
    let js = `  
    document.querySelector("#motd").remove();  
    document.querySelector("#ces").remove();
    document.querySelector("#socialshare").remove();  

    // Click the button in the modal in 1 second
    setTimeout(()=>document.querySelector("#alert > div > div > div.modal-footer > button").click(),1000);
    `;

    // Execute the JavaScript  
    contents.executeJavaScript(js, true)

      // Print the result
      .then((result) => {
        console.log(result)
      })
  })
})

//#motd
//#ces 
//#socialshare
//body > div.modal-backdrop.fade.show 
//#alert
//#alert > div > div > div.modal-footer > button