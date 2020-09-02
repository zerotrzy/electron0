// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow ()
{
 // Główne okno przegladarki
 const oknoProgramu = new BrowserWindow({
    width: 800, height: 600,
    backgroundColor: '#8194a3',
    textAreasAreResizable: false, // nie da się zwiększyć tekstu
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
 })

 // możemy wywalić domyslne menu
 oknoProgramu.removeMenu()
 // wczytujemy plik html
 oknoProgramu.loadFile('index.html')

 // oknoProgramu.webContents.openDevTools()
 // oknoProgramu.isResizable(true); // jeśli ma być zwiększane okno
 oknoProgramu.focus(); // okno ustawione do działania
}

// Jak już wszystko ustawiliśmy to możemy uruchomić następne
// funkcje. Czasem tylko tu da się to uruchomić.
app.whenReady().then(() =>
{
 createWindow()

 app.on('activate', function ()
  {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Zakończ program za pomocą Ctrl+Q
app.on('window-all-closed', function ()
{
 if (process.platform !== 'darwin') app.quit()
})

// Tu da się dodać kolejne pliki dla głównego procesu programu
