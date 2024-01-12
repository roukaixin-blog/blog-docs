import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "'不北咪'博客项目文档",
  description: "博客项目搭建文档",
  base: '/blog-docs/',
  lang: 'zh-CN',
  // 简洁 url（没有 .html 后缀）
  cleanUrls: true,
  // 文档源文件目录
  srcDir: './src',
  // 最后更新时间
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '后端', items: [
          {text: '单体服务版本', link: '/blog-server/boot/'},
          {text: '微服务版本', link: '/blog-server/cloud/'}
        ]
      },
      { text: '前端', link: '/blog-vue/' }
    ],

    sidebar: {
      '/': [
        {
          text: '指引',
          // 可折叠
          collapsed: false,
          items: [
            { text: '开始', link: '/start' }
          ]
        }
      ],
      '/blog-server/boot/': [
        {
          text: '指引',
          // 可折叠
          collapsed: false,
          items: [
            { text: '介绍', link: '/blog-server/boot/' },
            { text: '开始', link: '/blog-server/boot/start' }
          ]
        }
      ],
      '/blog-server/cloud/': [
        {
          text: '指引',
          // 可折叠
          collapsed: false,
          items: [
            { text: '介绍', link: '/blog-server/cloud/' },
            { text: '开始', link: '/blog-server/cloud/start' }
          ]
        }
      ],
      '/blog-vue/': [
        {
          text: '指引',
          // 可折叠
          collapsed: false,
          items: [
            { text: '介绍', link: '/blog-vue/' },
            { text: '开始', link: '/blog-vue/start' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 页面导航
    outline: {
      label: '页面导航'
    },

    // 上一页/下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
