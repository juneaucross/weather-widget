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
// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = {
  // configureWebpack: {
  //   plugins: [
  //     new VuetifyLoaderPlugin({
  //       /**
  //        * This function will be called for every tag used in each vue component
  //        * It should return an array, the first element will be inserted into the
  //        * components array, the second should be a corresponding import
  //        *
  //        * originalTag - the tag as it was originally used in the template
  //        * kebabTag    - the tag normalized to kebab-case
  //        * camelTag    - the tag normalized to PascalCase
  //        * path        - a relative path to the current .vue file
  //        * component   - a parsed representation of the current component
  //        */
  //       match(originalTag, { kebabTag, camelTag, path, component }) {
  //         if (kebabTag.startsWith('core-')) {
  //           return [
  //             camelTag,
  //             `import ${camelTag} from '@/components/core/${camelTag.substring(
  //               4
  //             )}.vue'`,
  //           ];
  //         }
  //       },
  //     }),
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
