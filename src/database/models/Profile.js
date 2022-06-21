module.exports = (sequelize, dataTypes) => {
  //nombre tabla
  let alias = "Profile";
  //columnas y tipos de datos:
  let columnas = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
  };

  let config = {
    tableName: "profiles",
    timestamps: false,
  };

  const Profile = sequelize.define(alias, columnas, config);

  Profile.associate = function (models) {
    //un oficio pertenece a varios helpers??
    Profile.hasMany(models.User, {
      as: "user",
      foreignKey: "profile_id",
    });
  };
  return Profile;
};
