module.exports = function (sequelize, DataType) {
    var Burger = sequelize.define('burgers', {
        name: DataType.STRING,
        devoured: DataType.BOOLEAN
    })
    return Burger;
}