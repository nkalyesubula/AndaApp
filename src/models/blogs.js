module.exports = (sequelize, DataTypes) => {
    const blogs = sequelize.define('blogs', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return blogs;
  };