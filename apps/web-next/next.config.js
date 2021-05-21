// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...(config.resolve || {}),
        alias: {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
        },
        extensions: [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...(config.resolve.extensions || []),
        ],
      },
    };
  },
});
