const { description } = require('../../package')

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    logo: '/assets/img/salsa-icon.png',
    nav: [
      {
        text: 'Paradigma',
        link: '/paradigma/'
      },
      {
        text: 'Prácticas',
        link: '/practicas/'
      },
      {
        text: 'Arquitectura',
        link: '/arquitectura/',
      },
      {
        text: 'CONACyT',
        link: 'https://www.conacyt.gob.mx/'
      }
    ],
    sidebar: {

    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-smooth-scroll',
  ]
}
