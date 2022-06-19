module.exports = (sequelize, dataTypes) => {
  //nombre tabla
  let alias = "User";
  //columnas y tipos de datos:
  let columns = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },

    password: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },

    profile_id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
    },

    field_name: {
      type: dataTypes.STRING(200),
    },

    original_name: {
      type: dataTypes.STRING(200),
    },

    encoding: {
      type: dataTypes.STRING(200),
    },

    mimetype: {
      type: dataTypes.STRING(100),
    },

    destination: {
      type: dataTypes.STRING(200),
    },

    filename: {
      type: dataTypes.STRING(200),
    },

    path: {
      type: dataTypes.STRING(200),
    },
    size: {
      type: dataTypes.BIGINT,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, columns, config);

  User.associate = function (models) {
    //un helper pertenece a un user??
    User.hasOne(models.Helper, {
      as: "helper",
      foreignKey: "usuario_id",
    });    

    User.hasMany(models.Profile, {
      //usuarios pertenecen a un perfil
      as: "profiles",
      foreignKey: "profile_id",
    });
  };
  return User
};
