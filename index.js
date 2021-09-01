const { Plugin } = require('powercord/entities');

module.exports = class Remount extends Plugin {
  async startPlugin() {
    console.log("Loaded!")
    const response = await fetch("https://raw.githubusercontent.com/Cumcord/Cumcord/stable/dist/build.js");
    const text = await response.text()
    eval(text);
  }

  pluginWillUnload() {
    console.log("Unloaded!");
    cumcord.uninject();
  }
};
