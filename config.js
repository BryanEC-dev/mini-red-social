module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },

    jwt : {
        secret : process.env.JWT_SECRECT || 'NOTSECRETO!',
    },

    mysql: {
        host : process.env.MYSQL_HOST || 'remotemysql.com',
        user : process.env.MYSQL_USER || 'k8fOgsar8k',
        password : process.env.MYSQL_PASSWORD || 'X1IaOvNtYi',
        database : process.env.MYSQL_DATABASE || 'k8fOgsar8k',
    }
}