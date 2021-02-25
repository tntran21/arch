const path = require('path')

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
      // sassOptions: {
      //   includePaths: [path.join(__dirname, 'styles')],
      // }
    }
    return config
  }
};
