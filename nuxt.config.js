import fs from 'fs'
import path from 'path'
import colors from 'vuetify/es5/util/colors'
import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
import MarkdownItDiv from 'markdown-it-div'

function getPaths() {
    return fs
        .readdirSync('content')
        .filter((e) => e.endsWith('.md'))
        .map((e) => e.replace('.md', ''))
        .map((e) => `/${e}`)
}

const md = new MarkdownIt({
    html: true,
    typographer: true
}).use(MarkdownItDiv)

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'preload',
                href: '/fonts/roboto-v20-latin-regular.woff2',
                as: 'font',
                type: 'font/woff2',
                crossorigin: 'anonymous'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~/assets/main.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/vuetify'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        defaultAssets: false,
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config) {
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                include: path.resolve(__dirname, 'content'),
                options: {
                    mode: [Mode.HTML],
                    markdown(body) {
                        return md.render(body)
                    }
                }
            })
        }
    },

    generate: {
        routes: getPaths()
    }
}
