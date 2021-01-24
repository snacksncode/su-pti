const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'static'),
                    to: path.join(__dirname, 'public')
                }
            ]
        })
      );
    }

    return config;
  }
};