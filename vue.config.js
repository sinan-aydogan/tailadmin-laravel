module.exports = {
    chainWebpack: config => {
        // Preserve white spaces for ssh-pre component.
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.whitespace = 'preserve'
                return options
            })
    }
}