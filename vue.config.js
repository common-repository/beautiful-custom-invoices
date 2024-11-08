module.exports = {
  publicPath: '',
  transpileDependencies: [
    'bootstrap-vue',
  ],
  pwa: {
    name: 'Beautiful Custom Invoices',
    manifestOptions: {
      short_name: 'Invoices',
    },
    themeColor: '#edeff1',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/htaccess/],
    },
  },
};
