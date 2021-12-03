export default {
    PORT: process.env.PORT || 3000,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'mypassword',
    database: process.env.DATABASE || 'misiontic',
    port: process.env.DB_PORT || 52000
}