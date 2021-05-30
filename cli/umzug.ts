import { Umzug, SequelizeStorage } from 'umzug'
import { Sequelize } from 'sequelize'

import databaseConfig from '../database/config'

const sequelize = new Sequelize(databaseConfig)

const context = {
  sequelize
}

export const migrator = new Umzug({
  migrations: {
    glob: ['database/migrations/*.ts', { cwd: __dirname }]
  },
  context,
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'migrations'
  }),
  logger: console
})

export const seeder = new Umzug({
  migrations: {
    glob: ['database/seeders/*.ts', { cwd: __dirname }]
  },
  context,
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'seeders'
  }),
  logger: console
})

export type Migration = typeof migrator._types.migration
export type Seeder = typeof seeder._types.migration
