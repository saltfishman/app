const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/v1', {
                target: 'http://ifover.com:3008',
                changeOrigin: true
            }
        )
    );
    app.use(
        proxy('/api', {
                target: 'https://apps.game.qq.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        )
    );
};