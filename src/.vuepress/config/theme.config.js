/**
* Theme configuration, here is the default theme configuration for VuePress.
*
* ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
*/
module.exports.themeConfig = {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
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
        }, {
            text: 'Cuenta',
            items: [
                { text: 'Avatar', link: '/avatar/' }
            ]
        },
        {
            text: 'Salsa',
            items: [
                { text: 'Glosario', link: '/glossary' },
                { text: 'Notación', link: '/notacion' },
                { text: 'Paradigma', link: '/paradigma/' },
                { text: 'Prácticas', link: '/practicas/' },
                { text: 'Arquitectura', link: '/arquitectura/' }
            ]
        }, {
            text: 'Lineamientos',
            items: [
                { text: 'Git', link: '/guidelines/git/' },
                { text: 'VueJs', link: '/guidelines/vuejs/' },
                { text: 'Java', link: '/guidelines/java/' },
                { text: 'Base de datos', link: '/guidelines/database/' }
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
            '04-principios',
            '05-vistas',
            '06-perspectivas',
            '07-justificacion',
            'A-anexo',
        ],
        '/guidelines/git/': [
            '',
            '1-elementos-del-flujo',
            '2-rama-descripcion',
            '4-rama-master',
            '5-rama-develop',
            '6-rama-feature',
            '7-rama-release',
            '8-rama-hotfixes',
            '9-versionamiento',
            '11-generales',
            '12-notas',
        ],
        '/guidelines/database/': [
            '',
        ],
    }
}