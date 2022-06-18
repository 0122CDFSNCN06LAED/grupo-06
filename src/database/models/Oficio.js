module.exports = (sequelize, dataTypes) => {
    //nombre tabla
    let alias = "Oficio"
    //columnas y tipos de datos:
    let columnas = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(300),
            allowNull: false

        },
        usa_seguro: {
            type: dataTypes.BIGINT(10),
           

        },
    };

    let config = {
        tableName: "oficio",
        timestamps: false,

    }

    const Oficio = sequelize.define(alias, columnas, config);

    Oficio.asocciate = function (models) {
        //un oficio pertenece a varios helpers??
        Oficio.hasMany(models.Helper, {
            as: "helper",
            foreignKey: "oficio_id",
            

        });

    }
return Oficio
}

