/**
* Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
*/
module.exports.pluginsConfig = [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-glossary',
    'vuepress-plugin-export',
    'vuepress-plugin-global-toc',
    'flowchart',
    ['container', { type: 'resaltar', defaultTitle: '', }],
    ['container', { type: 'advertencia', defaultTitle: '', }],
    ['container', { type: 'informacion', defaultTitle: 'Información', }],
    ['container', { type: 'ejemplo', defaultTitle: 'Ejemplo', }],
    ['container', { type: 'nota', defaultTitle: 'Nota', }],
    ['container', { type: 'malaPractica', defaultTitle: 'Mala práctica', }],
    ['container', { type: 'actividad', defaultTitle: 'Activdad', }],
]