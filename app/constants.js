const Constants = {
  settings: {
    appName: 'Ear (web)',
    appUrl: 'https://earweb.bttl.xyz/', // without trailing slash!
    nodeIntegrationEnabled: false, // keep disabled unless you run into ipcRenderer-specific troubles
    enableDevMenu: false, // enable for dev-builds only!
    userAgentPostfixWindows: 'WindowsApp', // custom user agent postfixes to distinguish traffic in Analytics
    userAgentPostfixOSX: 'MacOSXApp',
    userAgentPostfixLinux: 'LinuxApp',
    showLoader: false, // show src/loader.html window until your app is fully loaded - may increase loading time
    themeColor: '#F44336',
    windowBackgroundColor: '#FFFFFF', // set to false to disable
    titleBarStyle: 'default', // use 'hidden' or 'hiddenInset' for Frameless windows
    frame: true, // set to false for Frameless windows
    useTouchBar: false, // edit in app/touch_bar.js
    usePhotonKitShell: false, // macOS: loads src/shellMacOS.html with PhotonKit instead of the appUrl.
    useWindowsShell: false,   // Win: use custom shell from src/shellWIndows.html
    useLinuxShell: false,     // all 3 require 'nodeIntegrationEnabled: true'.
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      serialPort: true
    }
  
  },
  mainWindow: {
    width: 600,
    height: 860,
    largeWidth: 1220,
    largeHeight: 860,
  },
  strings: {
    open: 'Open',
  },
  menu: {
    app: {
      about: 'About',
      quit: 'Quit', // Beenden
      hide: 'Hide', // verbergen
      hideothers: 'Hide Others', // Andere verbergen
      unhide: 'Show All', // Alle anzeigen
    },
    file: {
      label: 'File', // Datei
    },
    edit: {
      label: 'Edit', // Bearbeiten
      undo: 'Undo', // Rückgänging
      redo: 'Redo', // Wiederholen
      cut: 'Cut', // Ausschneiden
      copy: 'Copy', // Kopieren
      paste: 'Paste', // Einfügen
      selectall: 'Select All' // Alles auswählen
    },
    view: {
      label: 'View', // Ansicht
      fullscreen: 'Toggle Fullscreen' // Vollbild de-/aktivieren
    },
    window: {
      label: 'Window', // Fenster
      minimize: 'Minimize', // Minimieren
      close: 'Close', // Schließen
      front: 'Bring All to Front', // Alle in den Vordergrund
    },
    help: {
      label: 'Help', // Hilfe
      contact: 'Contact' // Kontakt
    },
    leasing: {
      label: 'Calculate', // Berechnen
      car: 'Calculate Car Lease', // Kfz Leasing berechnen
      movables: 'Calculate Movables Lease', // Mobilien Leasing berechnen
      inquiry: 'Request Lease Offer', // Leasing Angebot anfordern
    },
  },
  touchBar: {
    label: 'Leasing',
    car: 'Car Calculator', // Kfz Rechner
    movables: 'Movables Calculator', // Mobilien Rechner
    inquiry: 'Request Offer', // Angebot anfordern
  }
};

module.exports = Constants;