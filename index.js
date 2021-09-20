const { Plugin } = require('powercord/entities');

module.exports = class Remount extends Plugin {
  async startPlugin() {
    console.log("Loaded!")
    // Fetch cumcord with caching disabled (for latest builds!!!)
    const noStore = { cache: "no-store" };
    const response = await fetch(
      "https://cors.bridged.cc/https://hg.sr.ht/~creatable/Cumcord/raw/dist/build.js?rev=stable",
      noStore
    );
    const text = await response.text();
    eval(text);
  }

  pluginWillUnload() {
    console.log("Unloaded!");
    cumcord.uninject();
  }
};
