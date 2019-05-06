const path = require("path");

module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: { useWatchman: false },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
