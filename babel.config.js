module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "extensions": [".ios.js", ".android.js", ".js", ".json"],
          "alias": {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@icons": "./src/assets/icons",
            "@styles": "./src/styles"
          }
        }
      ]
    ]
  };
};
