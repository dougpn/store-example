/** @type {import('next').NextConfig} */

var path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["jotai"] = path.resolve("./node_modules/jotai");
    return config;
  },
};