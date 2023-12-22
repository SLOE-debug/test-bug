const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  configureWebpack: {
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".tsx", ".less"],
    },
    plugins: [
      new MonacoWebpackPlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // new BundleAnalyzerPlugin(),
    ],
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: (p) => {
            return p.indexOf("node_modules") < 0;
          },
          localIdentName: "[local]_[hash:base64:5]",
        },
      },
    },
  },
  pages: {
    index: {
      entry: path.resolve("src/Main.ts"),
    },
  },
};
