module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
        parent_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        DancerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    
    })
 
    return Parent;
 };