module.exports = (sequelize, dataTypes) => {
    //nombre tabla
    let alias = "User"
    //columnas y tipos de datos:
    let columnas = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        phone: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        email: {
            type: dataTypes.STRING(200),
            allowNull: false
        },

        password: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        perfil_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,

        },

        field_name: {
            type: dataTypes.STRING(200)
        },

        original_name: {
            type: dataTypes.STRING(200)
        },

        encoding: {
            type: dataTypes.STRING(200)
        },

        mimetype: {
            type: dataTypes.STRING(100)
        },

        destination: {
            type: dataTypes.STRING(200)
        },

        path: {
            type: dataTypes.STRING(200)
        },
        size: {
            type: dataTypes.BIGINT
        },

    };

    let config={
        tableName: "users",
        timestamps: false,

    }

const User= sequelize.define(alias, columnas, config);

User.asocciate= function(models){
    //un usuario pertenece a un helper??
    User.belongsTo(models.Helper,{
        as: "helper",
        foreignKey: "usuario_id" 

    });

    User.belongsTo(models.Profile, {
        //varios usuarios pertenecen a un perfil
        as: "profile",
        foreignKey: "perfil_id"
    });

    
}

}