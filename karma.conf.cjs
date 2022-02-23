const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ["mocha", "chai", "sinon-chai"],
      client: {
        mocha: { ui: "bdd" },
      },
      files: [
        {
          pattern: config.grep ? config.grep : "test/**/*.test.js",
          type: "module",
        },
      ],
      esm: {
        // if you are using 'bare module imports' you will need this option
        nodeResolve: true,
      },
      proxies: {
        '/assets/rock-paper-scissors.png': './assets/rock-paper-scissors.png',
        '/assets/logout.png': './assets/rock-paper-scissors.png',
        '/assets/rock.png': './assets/rock-paper-scissors.png',
        '/assets/paper.png': './assets/rock-paper-scissors.png',
        '/assets/scissors.png': './assets/rock-paper-scissors.png'
      }
    })
  );
  return config;
};