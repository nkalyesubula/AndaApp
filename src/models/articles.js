"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING,
        allowNull: true
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("Flagged", "NotFlagged"),
        defaultValue: "NotFlagged"
      }
    },
    {}
  );
  Article.associate = function(models) {
    Article.belongsTo(models.Category, {
      foreignKey: "CategoryId"
    });
    Article.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return Article;
};
