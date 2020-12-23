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
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Buscar...',
    smoothScroll: true,
    displayAllHeaders: true,
    sidebarDepth: 1,
    collapsable: true,
    logo: '/assets/img/salsa-icon.png',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Glosario',
        link: '/glossary'
      },
      {
        text: 'Notación',
        link: '/notacion'
      },
      {
        text: 'Salsa',
        items: [
          { text: 'Paradigma', link: '/paradigma/' },
          { text: 'Prácticas', link: '/practicas/' },
          { text: 'Arquitectura', link: '/arquitectura/' }
        ]
      },
      {
        text: 'CONACyT',
        link: 'https://www.conacyt.gob.mx/'
      }
    ],
    sidebar: {
      '/arquitectura/': [
        '',
        '02-plataforma',
        '03-premisas',
        '04-principios'
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-glossary',
    'vuepress-plugin-export',
    'flowchart',
    ['container', { type: 'informacion', defaultTitle: 'Información', }],
    ['container', { type: 'ejemplo', defaultTitle: 'Ejemplo', }],
    ['container', { type: 'nota', defaultTitle: 'Nota', }],
    ['container', { type: 'malaPractica', defaultTitle: 'Mala práctica', }],
  ]
}
