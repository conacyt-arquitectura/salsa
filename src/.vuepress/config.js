const { description } = require('../../package')
const { themeConfig } = require('./config/theme.config')
const { pluginsConfig } = require('./config/plugins.config')

module.exports = {

  lang: 'es-MX', // this will be set as the lang attribute on <html>

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Salsa',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap' }],
    ['link', { rel: 'stylesheet', href: '"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&display=swap' }],
    ['link', { rel: 'icon', href: '/assets/img/salsa-icon.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: themeConfig,

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: pluginsConfig
}
