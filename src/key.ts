export default {
    PORT: process.env.PORT || 3000,
    host: process.env.DB_HOST || 'mysql-mintic.alwaysdata.net',
    user: process.env.DB_USER || 'mintic',
    password: process.env.DB_PASSWORD || 'Mintic2021Nicolas',
    database: process.env.DATABASE || 'mintic_2021',
    DB_PORT: process.env.DB_PORT || 3306
}