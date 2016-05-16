# electron-quick-start-serialport

Basic app running Electron with serialport included. (tested on Win7x64 using node 6.1.0)

Install and run it:
 
```bash
git clone https://github.com/paulolc/electron-quick-start-serialport
cd electron-quick-start-serialport
npm install && npm start
``` 

In order to achieve this, node-pre-gyp needs to be called explicitely with the necessary command line parameters. This is done on the scripts/install option of package.json:

```bash
(...)
  "scripts": {
    "install": "node-pre-gyp install --f(...)",
(...)
``` 

*NOTE:* On Windows you'll still need the [VS+python build stuff](https://github.com/voodootikigod/node-serialport#windows) in order the serialport native module to compile (via node-gyp). 
That is, until the guys at serialport distribute the binary for node-pre-gyp to support Electron 1.1.0 [serialport#812](https://github.com/voodootikigod/node-serialport/issues/812)

##Roadmap 

Keep this quick-start app in sync with the latest Electron releases.

##Original readme:

**Clone and run for a quick way to see an Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

### To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies and run the app
npm install && npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)
