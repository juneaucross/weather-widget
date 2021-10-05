// // const webpack = require('webpack');
// // module.exports = {
//   module.exports = {
//     configureWebpack: {
//       plugins: [
//         new MyAwesomeWebpackPlugin()
//       ]
//     }
//   },
//   // configureWebpack: {
//   //   plugins: [
//   //     new webpack.optimize.LimitChunkCountPlugin({
//   //       maxChunks: 1
//   //     })
//   //   ]
//   // },
//   // chainWebpack: config => {
//   //   config.optimization.delete('splitChunks')
//   // },
//   transpileDependencies: ['vuetify'],
//   // filenameHashing: false,
// }

// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  // configureWebpack: {
  //   plugins: [
  //     new VuetifyLoaderPlugin()
  //   ],
  // },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
    config.module
      .rule('css')
      .oneOf('vue')
      .use('vue-style-loader')
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('vue-style-loader')
      .tap((options) => {
        options.shadowMode = true;
        return options;
      });
  },
  // css: {
  //   requireModuleExtension: true,
  //   // I'm using material-components-web, this option is to use it.
  //   loaderOptions: {
  //     sass: {
  //       includePaths: ['node_modules'],
  //     },
  //   },
  // },
  transpileDependencies: ['vuetify'],
};
