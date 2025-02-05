const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  requestSerialPort: () => navigator.serial.requestPort(), // Expose only the necessary API
  // ... other APIs you want to expose ...
});

