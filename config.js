module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },

    jwt : {
        secret : process.env.JWT_SECRECT || 'NOTSECRETO!',
    },

    mysql: {
        host : process.env.MYSQL_HOST || 'localhost',
        port : process.env.MYSQL_PORT || '3306',
        user : process.env.MYSQL_USER || 'root',
        password : process.env.MYSQL_PASSWORD || '984704jbldhdir.',
        database : process.env.MYSQL_DATABASE || 'curso_practico_node',
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        
    }
}