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
            "@constants": "./src/constants",
            "@translations": "./src/translations",
            
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@icons": "./src/assets/icons",
            "@img": "./src/assets/img",
          }
        }
      ]
    ]
  };
};
