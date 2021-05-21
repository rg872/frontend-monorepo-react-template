const getWebpackConfigNx = require('@nrwl/react/plugins/webpack');

function getWebpackConfig(config) {
  const configNx = getWebpackConfigNx(config);
  return {
    ...configNx,
    resolve: {
      ...(configNx.resolve || {}),
      alias: {
        ...(configNx.resolve.alias || {}),
        'react-native$': 'react-native-web',
      },
      extensions: [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...(configNx.resolve.extensions || []),
      ],
    },
  };
}

module.exports = getWebpackConfig;
