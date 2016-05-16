// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const serialport = require('serialport');
serialport.list(function(err,ports){
    var outStr="";
    console.log(JSON.stringify(ports));
    if(err){ console.log(err); return; }
    outStr = ports.map(function(port){
        return port.comName 
    }).join(", ");
    document.body.innerHTML += outStr;
});