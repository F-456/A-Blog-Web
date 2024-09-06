module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("Blogs", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(3000),
            allowNull: false,

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Blogs
};