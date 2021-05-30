import { DataTypes } from 'sequelize'

import { Migration } from '../../cli/umzug'

export const up: Migration = async ({ context: { sequelize } }) => {
  await sequelize.getQueryInterface().createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    }
  })
}

export const down: Migration = async ({ context: { sequelize } }) =>
  sequelize.getQueryInterface().dropTable('users')
