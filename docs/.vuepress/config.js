module.exports = {
    title: 'Hello VuePress1', // 主题
    description: 'Just playing around', // 描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', {rel: 'manifest', href: '/manifest.json'}]
    ],
    serviceWorker: true, // PWA 设置为true
    base: '/blog/', // 这是部署到github相关的配置
    // dest: './dist', // 打包后文件输出路径,最好不要配置，会影响到部署
    repo: 'https://github.com/AdamSD1/blog', // 添加 github 链接
    markdown: { // markdown相关配置
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            { text: '主页', link: '/' },
            { text: '博文',
                items: [
                    { text: 'Test1', link: '/Test1/' },
                    { text: 'Test2', link: '/Test2/' }
                ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://www.github.com/xxx' },    
        ],
        sidebar: {  // 侧边栏配置
            '/Test1/': [
                {
                    title: 'test1',
                    path: '/Test1/test1_one_file'
                },
                {
                    title: 'Test1文件夹',
                    children: [
                        ['/Test1/test1_one_directory/','Test1文件夹']
                    ]
                },
            ],
            "/Test2/":[
                {title: 'test2',
                children: [
                    ['/Test2/test','收藏级电影']
                ]
            }
            ]
        },
        search: true, // 是否使用搜索框
        searchMaxSuggestions: 10, // 最大搜索数量
        sidebarDepth: 1,// 嵌套的标题链接深度，默认的深度为1
        lastUpdated: 'Last Updated',// 最后更新时间
        smoothScroll: true // 滚动效果
    }
}