const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');
const { generate } = require('@storybook/react-native/scripts/generate');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

// config.watchFolders = [monorepoRoot];

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

config.resolver.resolverMainFields.unshift('sbmodern');

module.exports = getConfig(config, {
  root,
  pkg,
  project: __dirname,
});
