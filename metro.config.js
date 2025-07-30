// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require('nativewind/metro');
 
// const config = getDefaultConfig(__dirname)
 
// module.exports = withNativeWind(config, {input,inlineRem,configPath:tailwindConfigPath,browserslist,browserslistEnv,typescriptEnvPath,disableTypeScriptGeneration,...options}, { input: './app/global.css' });
const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './app/global.css',
  inlineRem: true,
  configPath: './tailwind.config.js',
  browserslist: undefined,
  browserslistEnv: undefined,
  typescriptEnvPath: undefined,
  disableTypeScriptGeneration: false,
});
