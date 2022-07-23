module.exports = (sequelize, dataTypes) => {
  //nombre tabla
  const alias = "Helper";
  //columnas y tipos de datos:
  const columns = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    calle: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    numero: {
      type: dataTypes.BIGINT(11),
      allowNull: false,
    },
    barrio: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    provincia: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },

    codigo_postal: {
      type: dataTypes.STRING(11),
      allowNull: false,
    },

    mas_buscados: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      allowNull: false,
    },

    anos_de_experiencia: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },

    tarifa: {
      type: dataTypes.BIGINT(10).UNSIGNED,
    },

    descripcion: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    usuario_id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
    },
    oficio_id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
    },
  };

  const config = {
    tableName: "helpers",
    timestamps: false,
  };

  const Helper = sequelize.define(alias, columns, config);

  Helper.associate = function (models) {
    //un helper pertenece a un user??
    Helper.belongsTo(models.User, {
      as: "user",
      foreignKey: "usuario_id",
    });

    Helper.belongsTo(models.Oficio, {
      //varios helper pertenecen a un oficio
      as: "oficio",
      foreignKey: "oficio_id",
    });
  };
  return Helper;
};
