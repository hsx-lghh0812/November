"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING

    }, {
        timestamps: false,
        tableName: "User"
    });

    // User.associate = function (models) {
    //     User.hasMany(models.Task);
    // }

    return User;
};
