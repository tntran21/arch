const path = require('path')
// next.config.js
const withTM = require('next-transpile-modules')(['gsap']);
;
module.exports = withTM({
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    },

    config.node = {
      fs: 'empty',
    }
    return config;
  },
});