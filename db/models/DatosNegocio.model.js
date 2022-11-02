const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const BUSINESS_DATA_TABLE = 'Datos_Negocio'

const BusinessDataSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    comment: 'identificador de los datos del negocio',
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  numDoc: {
    type: DataTypes.STRING,
    field: 'num_doc',
    comment: 'numero de documento del negocio (NIT)',

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  nombre: {
    type: DataTypes.STRING,
    comment: 'nombre del negocio',

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  actividadEco: {
    type: DataTypes.STRING,
    field: 'actividad_eco',
    comment: 'actividad economica del negocio',

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  leyenda: {
    type: DataTypes.STRING,
    field: 'leyenda',
    comment: 'leyenda que se muestra en las facturas',

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  cantMinProd: {
    allowNull: false,
    type: DataTypes.INTEGER,
    comment: 'cantidad minima de productos para el control del inventario',

    field: 'cant_min_prod',
    validate: {
      isInt: true,
      notNull: msg.notNull
    }
  },
  email: {
    type: DataTypes.STRING,
    comment: 'email del negocio',

    field: 'email',
    allowNull: true,
    unique: true,
    validate: {
      isEmail: msg.isEmail
    }
  }
}

class BusinessData extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: BUSINESS_DATA_TABLE,
      modelName: BUSINESS_DATA_TABLE,
      timestamps: false
    }
  }
}

module.exports = { BusinessData, BusinessDataSchema, BUSINESS_DATA_TABLE }
