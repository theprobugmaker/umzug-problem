import { Options } from 'sequelize/types'

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

export default {
  dialect: 'postgres',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: false,
  define: {
    underscored: true
  }
} as Options
