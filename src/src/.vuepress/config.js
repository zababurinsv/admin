const { description } = require('../../package')

module.exports = {
  base:"/admin/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Admin',
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
    ['meta', { "http-equiv": 'content-type', content: 'text/html; charset=utf-8' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:image:height', content: '240' }],
    ['meta', { property: 'og:image:width', content: '537' }],
    ['meta', { property: 'og:image', content: 'https://i.imgur.com/pSrPUkJ.jpg' }],
    ['meta', { property: 'og:url', content: 'https://zababurinsv.github.io/ide-design/' }],
    ['meta', { property: 'og:description', content: 'Admin' }],
    ['meta', { property: 'og:title', content: 'Admin' }],
    ['meta', { property: 'og:type', content: 'contract' }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    ['meta', { property: 'og:site_name', content: 'Admin' }],
    ['link', { rel: 'icon', href: 'https://zababurinsv.github.io/favicon.ico',type: 'image/x-icon', }]
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
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Monopoly',
        link: '/monopoly/',
      },
      {
        text: 'Words',
        link: '/words/',
      },
      {
        text: 'Lang',
        link: '/lang/',
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Source',
        link: 'https://zababurinsv.github.io/src/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/api/': [
        {
          title: 'Config',
          children: ['']
        }
      ],
      '/words/': [
        {
          title: 'Words',
          children: ['','english']
        }
      ],
      '/monopoly/': [
        {
          title: 'City',
          children: [
            'city__new-york',
            'city__illinois',
            'city__north-carolina',
            'city__vermont',
            'city__pennsylvania',
            'city__kentucky',
            'city__indiana',
            'city__virginia',]
        },
        {
          title: 'Railway',
          children: ['railway__north','railway__east','railway__south','railway__west' ]
        },
        {
          title: 'Cards',
          children: ['cards__chance','cards__comunity']
        }
      ],
      '/lang/': [
        {
          title: 'Lang',
          children: ['lang__python','lang__sql']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
}
