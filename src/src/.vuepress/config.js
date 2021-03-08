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
    ['meta', { property: 'og:url', content: 'https://zababurinsv.github.io/design/' }],
    ['meta', { property: 'og:description', content: 'Admin' }],
    ['meta', { property: 'og:title', content: 'Admin' }],
    ['meta', { property: 'og:type', content: 'contract' }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    ['meta', { property: 'og:site_name', content: 'Admin' }],
    ['link', { rel: 'icon', href: 'https://zababurinsv.github.io/favicon.ico',type: 'image/x-icon', }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js' }],
    ['script', { src: 'https://zababurinsv.github.io/static/html/components/component_modules/cell-index/jason.mjs' }],
    ['script', { src: 'https://zababurinsv.github.io/static/html/components/component_modules/cell-index/st.mjs' }]
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
        text: 'RSS',
        link: '/rss/',
      },
      {
        text: 'moderators',
        link: '/moderators/',
      },
      {
        text: 'Biosphere',
        link: 'https://zababurinsv.github.io/Michurin/'
      },
      {
        text: 'Universe',
        link: 'https://zababurinsv.github.io/markdown/'
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
          title: 'api',
          collapsable: true,
          sidebarDepth: 2,
          children: ['']
        }
      ],
      '/planets/': [
        {
          title: 'Planets',
          collapsable: true,
          sidebarDepth: 2,
          children: ['']
        }
      ],
      '/biosphere/': [
        {
          title: 'Biosphere',
          collapsable: true,
          sidebarDepth: 2,
          children: ['']
        }
      ],
      '/words/': [
        {
          title: 'Words',
          children: ['russian','english']
        }
      ],
      '/rss/': [
        {
          title: 'RSS',
          children: ['']
        }
      ],
      '/moderators/': [
        {
          title: 'Moderators',
          children: ['']
        }
      ],
      '/monopoly/': [
        {
          title: 'City',
          children: [
            'gray',
            'cyan',
            'purple',
            'orange',
            'red',
            'yellow',
            'green',
            'blue',]
        },
        {
          title: 'Railway',
          children: ['railway__north','railway__east','railway__south','railway__west' ]
        },
        {
          title: 'Cards',
          children: ['cards__chance','cards__comunity']
        },
        {
          title: 'Dice',
          children: ['dice']
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
    '@vuepress/plugin-medium-zoom'
  ],
  markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
      //    '@silvanite/markdown-classes'
      // [
      //   'bullet_list_open',
      //   'heading_open',
      //   'image',
      //   'link_open',
      //   'paragraph_open',
      // ].map((rule) => {
      //   md.renderer.rules[rule] = (tokens, idx, options, env, slf) => {
      //     if (!tokens[idx].attrs) tokens[idx].attrs = []
      //     tokens[idx].attrs.push([ 'class', `md-${rule}` ])
      //     return slf.renderToken(tokens, idx, options)
      //   }
      // });
    },
  },
}
