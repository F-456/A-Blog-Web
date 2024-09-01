module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("Blogs", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    return Blogs
};