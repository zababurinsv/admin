const { description } = require('../../package')

module.exports = {
  base:"/admin/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'C 8 Марта !!!',
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
        text: 'Game',
        ariaLabel: 'Game Menu',
        items: [
          {
            text: 'Universe',
            link: '/universe/'
          },
          {
            text: 'Monopoly',
            link: '/monopoly/',
          }
        ]
      },
      {
        text: 'App',
        ariaLabel: 'App Menu',
        items: [
          {
            text: 'API',
            link: '/api/'
          },
          {
            text: 'Words',
            link: '/words/',
          }
        ]
      },
      {
        text: 'Org',
        ariaLabel: 'Org Menu',
        items: [
          {
            text: 'Moderators',
            link: '/moderators/',
          },
          {
            text: 'RSS',
            link: '/rss/',
          },
          {
            text: 'Source',
            link: '/source/'
          },
          {
            text: 'Task',
            link: '/task/',
          }
        ]
      },
      {
        text: 'Biosphere',
        link: 'https://zababurinsv.github.io/Michurin/'
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'De', link: '/language/de/' },
          { text: 'Ru', link: '/language/ru/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/api/': [
        {
          title: 'api',
          collapsable: true,
          sidebarDepth: 3,
          children: ['','ssr']
        }
      ],
      '/universe/': [
        {
          title: 'Universe',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/biosphere/': [
        {
          title: 'Biosphere',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/words/': [
        {
          title: 'Words',
          collapsable: true,
          sidebarDepth: 3,
          children: ['russian','english']
        }
      ],
      '/rss/': [
        {
          title: 'RSS',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/moderators/': [
        {
          title: 'Moderators',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/source/': [
        {
          title: 'Source',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/task/': [
        {
          title: 'Task',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
        }
      ],
      '/monopoly/': [
        {
          title: 'City',
          collapsable: true,
          sidebarDepth: 3,
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
          collapsable: true,
          sidebarDepth: 3,
          children: ['railway__north','railway__east','railway__south','railway__west' ]
        },
        {
          title: 'Cards',
          collapsable: true,
          sidebarDepth: 3,
          children: ['cards__chance','cards__comunity']
        },
        {
          title: 'Dice',
          collapsable: true,
          sidebarDepth: 3,
          children: ['dice']
        }
      ],
      '/lang/': [
        {
          title: 'Lang',
          collapsable: true,
          sidebarDepth: 3,
          children: ['']
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
    },
  },
}
