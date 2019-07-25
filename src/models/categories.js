"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    {}
  );
  Category.associate = function(models) {
    Category.hasMany(models.Article, {
      foreignKey: "categoryId",
      as: "articles"
    });
  };
  return Category;
};
