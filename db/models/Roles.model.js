const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const ROL_TABLE = 'Roles'

const RolSchema = {
  idRol: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'id_rol',
    validate: {
      isInt: true
    }
  },
  nombreRol: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nombre_rol',
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  estadoRol: {
    type: DataTypes.INTEGER,
    field: 'estado_rol',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class Rol extends Model {
  static associate(models) {
    this.hasMany(models.Roles_Empleados, { foreignKey: 'id_rol' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: ROL_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Rol, RolSchema, ROL_TABLE }